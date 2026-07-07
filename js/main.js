/* ==========================================================================
   DEFENDoor landing page — interactions & Google Ads integration
   Plain vanilla JS, no dependencies.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
     1. DYNAMIC HEADLINE / TITLE from Google Ads keyword data
     ---------------------------------------------------------------
     Google Ads sends the matched keyword/search term through the URL.
     Set your Final URL suffix or a tracking template param, e.g.:
        ?keyword={keyword}    or   ?utm_term={keyword}
     You can also force an exact headline with ?hl=Engineered%20Strength
     Fallback headline is always "Retractable Security Gates".
  --------------------------------------------------------------- */
  var FALLBACK = "Retractable Security Gates";

  // Approved ad headlines (from the Google Ads campaign).
  var HEADLINES = [
    "Retractable Security Gates", "Protecting What You Love", "Engineered Strength",
    "Protecting Your Loved Ones", "The Peace Of Mind You Deserve", "Renowned Strength",
    "Transform Your Home & Business", "Home Security Gates", "Expandable Security Gates",
    "Solid Steel Security Gates", "Very Strong", "Solid Steel Gates"
  ];

  // Map common ad keywords / search terms to the most relevant headline.
  var KEYWORD_MAP = [
    { re: /retractable/, h: "Retractable Security Gates" },
    { re: /trellis|expandable/, h: "Expandable Security Gates" },
    { re: /sliding/, h: "Retractable Security Gates" },
    { re: /burglar/, h: "Home Security Gates" },
    { re: /solid\s*steel/, h: "Solid Steel Security Gates" },
    { re: /home|house|residential/, h: "Home Security Gates" },
    { re: /business|shop|office|commercial/, h: "Transform Your Home & Business" },
    { re: /strong|strength/, h: "Engineered Strength" },
    { re: /security gate/, h: "Retractable Security Gates" }
  ];

  function getParam() {
    var p = new URLSearchParams(window.location.search);
    return {
      hl: p.get("hl"),
      keyword: p.get("keyword") || p.get("kw") || p.get("utm_term") || p.get("q") || ""
    };
  }

  function resolveHeadline() {
    var params = getParam();

    // 1) explicit ?hl= exact/loose match against approved headlines
    if (params.hl) {
      var wanted = params.hl.trim().toLowerCase();
      for (var i = 0; i < HEADLINES.length; i++) {
        if (HEADLINES[i].toLowerCase() === wanted) return HEADLINES[i];
      }
    }

    // 2) keyword-based mapping
    var kw = (params.keyword || "").toLowerCase().trim();
    if (kw && kw !== "{keyword}") {
      // exact match to an approved headline first
      for (var j = 0; j < HEADLINES.length; j++) {
        if (HEADLINES[j].toLowerCase() === kw) return HEADLINES[j];
      }
      // then pattern map
      for (var k = 0; k < KEYWORD_MAP.length; k++) {
        if (KEYWORD_MAP[k].re.test(kw)) return KEYWORD_MAP[k].h;
      }
    }
    return FALLBACK;
  }

  function applyHeadline() {
    var headline = resolveHeadline();
    var h1 = document.getElementById("hero-heading");
    if (h1) h1.textContent = headline;
    // Update the document title while keeping the brand.
    document.title = headline + " | DEFENDoor — Custom Security Gates SA";
    // Reflect the keyword in a hidden form field for lead attribution.
    var kwField = document.getElementById("field-keyword");
    if (kwField) kwField.value = (getParam().keyword || headline);
  }

  /* ---------------------------------------------------------------
     2. Sticky header — condensed style after scroll
  --------------------------------------------------------------- */
  function initHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      if (window.scrollY > 12) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------------------------------------------------------
     2b. Mobile burger menu
  --------------------------------------------------------------- */
  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("mobile-nav");
    if (!toggle || !nav) return;

    function close() {
      nav.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
    function open() {
      nav.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }
    toggle.addEventListener("click", function () {
      if (nav.hidden) open(); else close();
    });
    // Close after tapping a link.
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });
    // Close on Escape.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !nav.hidden) { close(); toggle.focus(); }
    });
  }

  /* ---------------------------------------------------------------
     3. Gallery carousel (scroll-snap + arrows + dots)
  --------------------------------------------------------------- */
  function initGallery() {
    var track = document.querySelector(".gallery-track");
    if (!track) return;
    var prev = document.querySelector(".gallery-btn--prev");
    var next = document.querySelector(".gallery-btn--next");
    var dotsWrap = document.querySelector(".gallery-dots");
    var slides = Array.prototype.slice.call(track.querySelectorAll(".gallery-slide"));

    // Build dots
    var dots = [];
    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var b = document.createElement("button");
        b.className = "gallery-dot";
        b.type = "button";
        b.setAttribute("aria-label", "Go to slide " + (i + 1));
        b.addEventListener("click", function () {
          slides[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        });
        dotsWrap.appendChild(b);
        dots.push(b);
      });
    }

    function step() {
      var s = slides[0];
      if (!s) return track.clientWidth;
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "16") || 16;
      return s.getBoundingClientRect().width + gap;
    }
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });

    // Active dot on scroll
    var raf = null;
    track.addEventListener("scroll", function () {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = null;
        var center = track.scrollLeft + track.clientWidth / 2;
        var best = 0, bestDist = Infinity;
        slides.forEach(function (s, i) {
          var mid = s.offsetLeft + s.offsetWidth / 2;
          var d = Math.abs(mid - center);
          if (d < bestDist) { bestDist = d; best = i; }
        });
        dots.forEach(function (d, i) { d.classList.toggle("is-active", i === best); });
      });
    }, { passive: true });
    if (dots[0]) dots[0].classList.add("is-active");
  }

  /* ---------------------------------------------------------------
     4. FAQ accordion (single open)
  --------------------------------------------------------------- */
  function initFaq() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));
    items.forEach(function (item) {
      var btn = item.querySelector(".faq-q");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");
        items.forEach(function (o) {
          o.classList.remove("is-open");
          var b = o.querySelector(".faq-q");
          if (b) b.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ---------------------------------------------------------------
     5. Reveal-on-scroll
  --------------------------------------------------------------- */
  function initReveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------------
     6. Lead form — validation + submit
     ---------------------------------------------------------------
     No backend is wired up (static hosting on GitHub Pages). On submit
     the data is packaged and the visitor is sent to thank-you.html,
     where the Google Ads conversion fires. Point ACTION_ENDPOINT at a
     form handler (Formspree / Google Apps Script / etc.) to receive leads.
  --------------------------------------------------------------- */
  var ACTION_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"

  function initForm() {
    var form = document.getElementById("lead-form");
    if (!form) return;
    var requiredFields = Array.prototype.slice.call(form.querySelectorAll("[required]"));

    function validateField(field) {
      var wrap = field.closest(".form-field");
      var ok = field.checkValidity();
      if (wrap) wrap.classList.toggle("has-error", !ok);
      return ok;
    }
    requiredFields.forEach(function (f) {
      f.addEventListener("blur", function () { validateField(f); });
      f.addEventListener("input", function () {
        var wrap = f.closest(".form-field");
        if (wrap && wrap.classList.contains("has-error")) validateField(f);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var allOk = true;
      requiredFields.forEach(function (f) { if (!validateField(f)) allOk = false; });
      if (!allOk) {
        var firstErr = form.querySelector(".form-field.has-error input, .form-field.has-error textarea");
        if (firstErr) firstErr.focus();
        return;
      }

      var submitBtn = form.querySelector("[type=submit]");
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Sending…"; }

      // Fire a GA4 lead event immediately (works before navigation).
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", { currency: "ZAR", value: 1 });
      }

      var done = function () { window.location.href = "thank-you.html"; };

      if (ACTION_ENDPOINT) {
        var data = new FormData(form);
        fetch(ACTION_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(done).catch(done);
      } else {
        // No endpoint configured — go straight to the thank-you page.
        setTimeout(done, 150);
      }
    });
  }

  /* ---------------------------------------------------------------
     6b. Logo marquee — slow automatic back-and-forth scroll
  --------------------------------------------------------------- */
  function initLogoMarquee() {
    var track = document.querySelector(".logo-wall");
    if (!track) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var SPEED = 0.35;      // px per frame (~21px/s) — slow, gentle
    var dir = 1;           // 1 = right, -1 = left
    var paused = false;
    var last = 0;

    function maxScroll() { return track.scrollWidth - track.clientWidth; }

    function tick(now) {
      if (!last) last = now;
      var dt = now - last;
      last = now;
      var max = maxScroll();
      if (max > 2 && !paused) {
        track.scrollLeft += dir * SPEED * (dt / 16.67);
        if (track.scrollLeft >= max - 0.5) { track.scrollLeft = max; dir = -1; }
        else if (track.scrollLeft <= 0.5) { track.scrollLeft = 0; dir = 1; }
      }
      requestAnimationFrame(tick);
    }

    // Pause on hover / touch / manual scroll so the user can browse.
    var resume;
    function pause() { paused = true; clearTimeout(resume); }
    function delayedResume() { clearTimeout(resume); resume = setTimeout(function () { paused = false; }, 1400); }
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", delayedResume);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", delayedResume, { passive: true });
    track.addEventListener("wheel", function () { pause(); delayedResume(); }, { passive: true });

    requestAnimationFrame(tick);
  }

  /* ---------------------------------------------------------------
     7. Current year in footer
  --------------------------------------------------------------- */
  function initYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------------- boot ---------------- */
  function boot() {
    applyHeadline();
    initHeader();
    initMobileNav();
    initGallery();
    initFaq();
    initReveal();
    initForm();
    initLogoMarquee();
    initYear();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
