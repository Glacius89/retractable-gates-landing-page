/* @ds-bundle: {"format":4,"namespace":"DEFENDoorDesignSystem_067549","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Rating","sourcePath":"components/content/Rating.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"FeatureCard","sourcePath":"components/marketing/FeatureCard.jsx"},{"name":"LogoWall","sourcePath":"components/marketing/LogoWall.jsx"},{"name":"ModelCard","sourcePath":"components/marketing/ModelCard.jsx"},{"name":"ReviewCard","sourcePath":"components/marketing/ReviewCard.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"e1e6636a9267","components/content/Badge.jsx":"16b8fe29651e","components/content/Rating.jsx":"1667896f6bdc","components/content/SectionHeading.jsx":"589f0948910f","components/content/StatBlock.jsx":"a4880c5dce72","components/forms/Button.jsx":"c692ed768ae3","components/forms/Input.jsx":"e3534886257c","components/marketing/FeatureCard.jsx":"1f13c869ea31","components/marketing/LogoWall.jsx":"dd23fae6e4f6","components/marketing/ModelCard.jsx":"c5f57e390a24","components/marketing/ReviewCard.jsx":"18a1480aae18","ui_kits/landing-page/App.jsx":"3563a5e0f84a","ui_kits/landing-page/Faq.jsx":"ae872360cc64","ui_kits/landing-page/Features.jsx":"5d0a4bf77912","ui_kits/landing-page/Footer.jsx":"04bbc0edd9ba","ui_kits/landing-page/Gallery.jsx":"69a21d87428f","ui_kits/landing-page/Guarantee.jsx":"e525dddf9c6b","ui_kits/landing-page/Header.jsx":"54212a8c1ec2","ui_kits/landing-page/Hero.jsx":"f22adeb539bc","ui_kits/landing-page/LeadForm.jsx":"509970a2853e","ui_kits/landing-page/Models.jsx":"193a0b5eed97","ui_kits/landing-page/Reviews.jsx":"4e5ecde63799","ui_kits/landing-page/TrustStrip.jsx":"7b0d3118f566","ui_kits/landing-page/data.js":"99f1cf32e254"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DEFENDoorDesignSystem_067549 = window.DEFENDoorDesignSystem_067549 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
/** Single-open FAQ accordion. Feed it `items: {q, a}[]`. */
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      ...style
    }
  }, items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "var(--white)",
        border: `1px solid ${isOpen ? "var(--brand-accent)" : "var(--border-subtle)"}`,
        borderRadius: "var(--radius-md)",
        boxShadow: isOpen ? "var(--shadow-sm)" : "none",
        overflow: "hidden",
        transition: "border-color var(--dur-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        textAlign: "left",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "1.125rem 1.25rem",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-body-lg)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-heading)"
      }
    }, item.q, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        width: 26,
        height: 26,
        display: "grid",
        placeItems: "center",
        borderRadius: "50%",
        background: isOpen ? "var(--brand-primary)" : "var(--primary-100)",
        color: isOpen ? "var(--white)" : "var(--brand-primary)",
        transform: isOpen ? "rotate(45deg)" : "none",
        transition: "transform var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)",
        fontSize: 18,
        lineHeight: 1
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows var(--dur-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: "0 1.25rem 1.25rem",
        color: "var(--text-body)",
        fontSize: "var(--text-base)",
        lineHeight: "var(--lh-body)"
      }
    }, item.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
/** Small status/guarantee pill. `tone` picks the colour role. */
function Badge({
  children,
  tone = "accent",
  size = "md",
  style
}) {
  const tones = {
    accent: {
      background: "var(--primary-100)",
      color: "var(--primary-800)"
    },
    cta: {
      background: "color-mix(in srgb, var(--brand-cta) 16%, white)",
      color: "var(--cta-700)"
    },
    teal: {
      background: "color-mix(in srgb, var(--brand-secondary) 14%, white)",
      color: "var(--teal-700)"
    },
    solid: {
      background: "var(--brand-cta)",
      color: "var(--white)"
    },
    dark: {
      background: "var(--primary-900)",
      color: "var(--white)"
    }
  };
  const sizes = {
    sm: {
      fontSize: "0.6875rem",
      padding: "0.2rem 0.6rem"
    },
    md: {
      fontSize: "var(--text-xs)",
      padding: "0.35rem 0.75rem"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.35rem",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      borderRadius: "var(--radius-pill)",
      lineHeight: 1,
      ...sizes[size],
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Rating.jsx
try { (() => {
/** Five-point star rating (supports fractional values, e.g. 4.8). */
function Rating({
  value = 5,
  max = 5,
  size = 18,
  showValue = false,
  count,
  style
}) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    const fill = Math.max(0, Math.min(1, value - (i - 1)));
    stars.push(/*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: "relative",
        display: "inline-block",
        width: size,
        height: size
      }
    }, /*#__PURE__*/React.createElement(Star, {
      size: size,
      color: "var(--neutral-300)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 0,
        width: `${fill * 100}%`,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(Star, {
      size: size,
      color: "#f6a723"
    }))));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 2
    }
  }, stars), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-heading)"
    }
  }, value.toFixed(1), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontWeight: 400
    }
  }, " (", count, ")")));
}
function Star({
  size,
  color
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.2l2.9 6.05 6.6.72-4.9 4.5 1.32 6.53L12 16.9l-5.92 3.1L7.4 13.47 2.5 8.97l6.6-.72z"
  }));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Rating.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
/** Eyebrow + title + optional subtitle block used to open every marketing section. */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === "center" ? 680 : "none",
      marginInline: align === "center" ? "auto" : undefined,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow",
    style: {
      marginBottom: "0.75rem"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      fontWeight: "var(--fw-extrabold)",
      letterSpacing: "var(--ls-tight)",
      color: onDark ? "var(--white)" : "var(--text-heading)",
      margin: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-lg)",
      color: onDark ? "var(--primary-200)" : "var(--text-muted)",
      marginTop: "0.75rem",
      marginBottom: 0
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
/** Big-number statistic block (e.g. "31 Years", "107 Reviews"). */
function StatBlock({
  value,
  label,
  onDark = false,
  align = "center",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "clamp(2.25rem, 4vw, 3rem)",
      fontWeight: "var(--fw-extrabold)",
      letterSpacing: "var(--ls-tight)",
      lineHeight: 1,
      color: onDark ? "var(--white)" : "var(--brand-primary)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.5rem",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: onDark ? "var(--primary-200)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DEFENDoor primary action button. Green CTA is the default; use `secondary`
 * (steel blue) for supporting actions and `ghost`/`outline` for low emphasis.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  href,
  type = "button",
  disabled = false,
  icon,
  iconRight,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0.5rem 1rem",
      fontSize: "0.875rem"
    },
    md: {
      padding: "0.75rem 1.5rem",
      fontSize: "1rem"
    },
    lg: {
      padding: "1rem 2rem",
      fontSize: "1.0625rem"
    }
  };
  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--white)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-cta)"
    },
    secondary: {
      background: "var(--action-secondary)",
      color: "var(--white)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    outline: {
      background: "transparent",
      color: "var(--brand-primary)",
      border: "1px solid var(--brand-primary)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand-primary)",
      border: "1px solid transparent"
    },
    dark: {
      background: "var(--white)",
      color: "var(--primary-900)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    }
  };
  const base = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-bold)",
    letterSpacing: "var(--ls-button)",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.55 : 1,
    textDecoration: "none",
    transition: "transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const Tag = href ? "a" : "button";
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    style: base,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled text input used across the DEFENDoor lead form.
 * Supports single-line inputs and (via `as="textarea"`) the requests field.
 */
function Input({
  label,
  id,
  as = "input",
  type = "text",
  placeholder,
  required = false,
  value,
  defaultValue,
  onChange,
  rows = 4,
  hint,
  style,
  ...rest
}) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const controlStyle = {
    width: "100%",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-base)",
    color: "var(--text-heading)",
    background: "var(--white)",
    border: "1px solid var(--border-default)",
    borderRadius: "var(--radius-md)",
    padding: "0.75rem 0.875rem",
    lineHeight: 1.4,
    outline: "none",
    transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
    resize: as === "textarea" ? "vertical" : undefined,
    ...style
  };
  const focus = e => {
    e.currentTarget.style.borderColor = "var(--brand-primary)";
    e.currentTarget.style.boxShadow = "0 0 0 3px var(--focus-ring)";
  };
  const blur = e => {
    e.currentTarget.style.borderColor = "var(--border-default)";
    e.currentTarget.style.boxShadow = "none";
  };
  const Control = as === "textarea" ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.375rem"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement(Control, _extends({
    id: fieldId
  }, as === "textarea" ? {
    rows
  } : {
    type
  }, {
    placeholder: placeholder,
    required: required,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    style: controlStyle,
    onFocus: focus,
    onBlur: blur
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCard.jsx
try { (() => {
/** Product-feature card: image on top, title + description below. */
function FeatureCard({
  image,
  title,
  description,
  tag,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      flexDirection: "column",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 10",
      background: "var(--surface-subtle)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1.25rem 1.375rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }
  }, tag && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "teal",
    size: "sm",
    style: {
      alignSelf: "flex-start"
    }
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h4)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-heading)",
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-snug)"
    }
  }, description)));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoWall.jsx
try { (() => {
/** Grayscale trust-logo wall for client brands. Pass `logos: {src, name}[]`. */
function LogoWall({
  logos = [],
  columns,
  grayscale = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "1rem",
      alignItems: "center",
      ...style
    }
  }, logos.map((logo, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      placeItems: "center",
      padding: "0.75rem 1rem",
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo.src,
    alt: logo.name,
    title: logo.name,
    style: {
      maxWidth: "100%",
      maxHeight: 40,
      objectFit: "contain",
      filter: grayscale ? "grayscale(1)" : "none",
      opacity: grayscale ? 0.7 : 1,
      transition: "filter var(--dur-base) var(--ease-standard), opacity var(--dur-base) var(--ease-standard)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.filter = "none";
      e.currentTarget.style.opacity = "1";
    },
    onMouseLeave: e => {
      if (grayscale) {
        e.currentTarget.style.filter = "grayscale(1)";
        e.currentTarget.style.opacity = "0.7";
      }
    }
  }))));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ModelCard.jsx
try { (() => {
/** Retractable-gate model card: image, name, guarantee, spec bullets, CTA. */
function ModelCard({
  image,
  name,
  guarantee,
  specs = [],
  featured = false,
  ctaLabel = "Request a Quote",
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: `1px solid ${featured ? "var(--brand-primary)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      ...style
    }
  }, featured && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "solid",
    size: "sm"
  }, "Most Popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 3",
      background: "var(--surface-subtle)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1.375rem 1.5rem 1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.875rem",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h3)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--brand-primary)",
      margin: 0
    }
  }, name), guarantee && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "cta",
    size: "sm"
  }, guarantee)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      flex: 1
    }
  }, specs.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "0.6rem",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      color: "var(--brand-cta)",
      fontWeight: 700,
      marginTop: 1
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: s
    }
  })))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? "primary" : "outline",
    block: true,
    onClick: onCta,
    style: {
      marginTop: "0.25rem"
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { ModelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ModelCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ReviewCard.jsx
try { (() => {
/** Customer review card with 5-star rating, quote, and reviewer name. */
function ReviewCard({
  name,
  quote,
  rating = 5,
  source = "Google Review",
  style
}) {
  const initials = (name || "?").split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.875rem",
      height: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    size: 16
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-lg)",
      color: "var(--text-heading)",
      lineHeight: "var(--lh-snug)",
      flex: 1
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginTop: "0.25rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--primary-100)",
      color: "var(--brand-primary)",
      display: "grid",
      placeItems: "center",
      fontWeight: 700,
      fontSize: 14
    }
  }, initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      color: "var(--text-heading)",
      fontSize: "var(--text-sm)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, source))));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/App.jsx
try { (() => {
// Root app — composes the DEFENDoor landing page and wires the quote CTA.
function App() {
  const D = window.DD_DATA;
  const formRef = React.useRef(null);
  // Dynamic headline based on ?kw= query param (Google Ads keyword insertion).
  const kw = new URLSearchParams(window.location.search).get("kw");
  const headline = kw && D.headlines.find(h => h.toLowerCase() === kw.toLowerCase()) || "Retractable Security Gates";
  const scrollToForm = () => {
    const el = document.getElementById("quote");
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 10,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onQuote: scrollToForm
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: scrollToForm,
    headline: headline
  }), /*#__PURE__*/React.createElement(TrustStrip, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Models, {
    onQuote: scrollToForm
  }), /*#__PURE__*/React.createElement(Gallery, null), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(Guarantee, {
    onQuote: scrollToForm
  }), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(LeadForm, {
    formRef: formRef
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(StickyCallBar, {
    onQuote: scrollToForm
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Faq.jsx
try { (() => {
// FAQ section.
function Faq() {
  const {
    SectionHeading,
    Accordion
  } = window.DEFENDoorDesignSystem_067549;
  const D = window.DD_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      background: "var(--surface-subtle)",
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Questions",
    title: "Frequently asked questions"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: D.faq,
    defaultOpen: 0
  }))));
}
Object.assign(window, {
  Faq
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Features.jsx
try { (() => {
// Features grid — six product feature cards on a soft accent band.
function Features() {
  const {
    SectionHeading,
    FeatureCard
  } = window.DEFENDoorDesignSystem_067549;
  const D = window.DD_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    style: {
      background: "var(--surface-subtle)",
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Engineered Strength",
    title: "Built to an exceptional standard",
    subtitle: "All-steel construction, stainless steel rivets, and bolted into place. Every detail is engineered to resist break-ins."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 22,
      marginTop: 44
    },
    className: "dd-feature-grid"
  }, D.features.map(f => /*#__PURE__*/React.createElement(FeatureCard, {
    key: f.title,
    image: `../../assets/features/${f.img}`,
    title: f.title,
    description: f.desc
  })))));
}
Object.assign(window, {
  Features
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Footer.jsx
try { (() => {
// Footer + mobile sticky call/quote bar.
function Footer() {
  const D = window.DD_DATA;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--primary-900)",
      color: "var(--primary-200)",
      padding: "48px 0 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 32,
      paddingBottom: 32,
      borderBottom: "1px solid rgba(255,255,255,0.12)"
    },
    className: "dd-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/favicon.png",
    alt: "DEFENDoor",
    style: {
      width: 34,
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 20,
      color: "#fff"
    }
  }, "DEFEN", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-accent)"
    }
  }, "Door"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      maxWidth: 320
    }
  }, "Security solutions you can trust. Protecting your family and business since 1995.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      marginBottom: 12
    }
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: D.phoneHref,
    style: {
      display: "block",
      color: "#fff",
      fontWeight: 700,
      marginBottom: 6
    }
  }, D.phoneDisplay), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${D.email}`,
    style: {
      color: "var(--primary-200)",
      fontSize: 14
    }
  }, D.email)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      marginBottom: 12
    }
  }, "Branches"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      margin: 0,
      lineHeight: 1.7
    }
  }, "Randburg, Johannesburg (Head Office)", /*#__PURE__*/React.createElement("br", null), "Cape Town \xB7 Durban"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 20,
      fontSize: 13,
      flexWrap: "wrap",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " DEFENDoor. All rights reserved."), /*#__PURE__*/React.createElement("a", {
    href: "https://defendoor.co.za/privacy-policy/",
    style: {
      color: "var(--primary-200)"
    }
  }, "Privacy Policy"))));
}
function StickyCallBar({
  onQuote
}) {
  const {
    Button
  } = window.DEFENDoorDesignSystem_067549;
  const D = window.DD_DATA;
  return /*#__PURE__*/React.createElement("div", {
    className: "dd-sticky-bar",
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      display: "none",
      gap: 10,
      padding: 12,
      background: "rgba(255,255,255,0.96)",
      backdropFilter: "blur(8px)",
      borderTop: "1px solid var(--border-subtle)",
      boxShadow: "0 -4px 20px rgba(30,61,84,0.12)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: D.phoneHref,
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      border: "1px solid var(--brand-primary)",
      color: "var(--brand-primary)",
      borderRadius: "var(--radius-pill)",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(PhoneIcon, {
    color: "var(--brand-primary)"
  }), " Call"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    style: {
      flex: 1.4
    },
    onClick: onQuote
  }, "Get Free Quote"));
}
Object.assign(window, {
  Footer,
  StickyCallBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Gallery.jsx
try { (() => {
// Gallery — image carousel of installed gates.
function Gallery() {
  const {
    SectionHeading,
    Button
  } = window.DEFENDoorDesignSystem_067549;
  const D = window.DD_DATA;
  const [i, setI] = React.useState(0);
  const n = D.gallery.length;
  const go = d => setI(p => (p + d + n) % n);
  // show 3 at a time on wide screens; track slides by one.
  const visible = [0, 1, 2].map(k => D.gallery[(i + k) % n]);
  React.useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % n), 4500);
    return () => clearInterval(t);
  }, [n]);
  return /*#__PURE__*/React.createElement("section", {
    id: "gallery",
    style: {
      background: "var(--surface-subtle)",
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Work",
    title: "Recent installations",
    subtitle: "Custom gates fitted across homes, estates and businesses."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ArrowBtn, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(ArrowBtn, {
    dir: "right",
    onClick: () => go(1)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
      marginTop: 36
    },
    className: "dd-gallery-grid"
  }, visible.map((src, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      aspectRatio: "4 / 3",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
      background: "var(--neutral-100)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/gallery/${src}`,
    alt: "DEFENDoor installation",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 7,
      marginTop: 22
    }
  }, D.gallery.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setI(k),
    "aria-label": `Slide ${k + 1}`,
    style: {
      width: k === i ? 22 : 8,
      height: 8,
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      background: k === i ? "var(--brand-primary)" : "var(--neutral-300)",
      transition: "all var(--dur-base) var(--ease-standard)"
    }
  })))));
}
function ArrowBtn({
  dir,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": dir,
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      border: "1px solid var(--border-default)",
      background: "var(--white)",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      color: "var(--brand-primary)",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: dir === "left" ? "rotate(180deg)" : "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  })));
}
Object.assign(window, {
  Gallery
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Guarantee.jsx
try { (() => {
// Guarantee + finance band — stats, guarantee promise, Fevertree finance.
function Guarantee({
  onQuote
}) {
  const {
    SectionHeading,
    StatBlock,
    Button,
    Badge
  } = window.DEFENDoorDesignSystem_067549;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--white)",
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 48,
      alignItems: "center"
    },
    className: "dd-guarantee"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Why Choose DEFENDoor",
    title: "Nearly impenetrable. Fully guaranteed.",
    subtitle: "Only the highest-quality solid steel and patented reinforcement technology. Every gate is custom-built to fit \u2014 and backed in writing."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      margin: "28px 0 30px"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    align: "left",
    value: "31 Yrs",
    label: "In business"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    align: "left",
    value: "2\u20135 Yr",
    label: "Guarantee"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    align: "left",
    value: "4 Br.",
    label: "JHB \xB7 CPT \xB7 DBN"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onQuote
  }, "Get My Free Quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    href: "#models"
  }, "Compare Models"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-accent)",
      borderRadius: "var(--radius-xl)",
      padding: 32,
      border: "1px solid var(--border-accent)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal"
  }, "Financing Available"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h3)",
      margin: "16px 0 8px",
      color: "var(--text-heading)"
    }
  }, "Pay it off over time"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      marginBottom: 20
    }
  }, "Spread the cost of your custom security gate with flexible financing through Fevertree Finance. Free quotes and demos, no obligation."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      borderRadius: "var(--radius-md)",
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      gap: 14,
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/Fevertree_logo.png",
    alt: "Fevertree Finance",
    style: {
      height: 34,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "Approved finance partner"))))));
}
Object.assign(window, {
  Guarantee
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Guarantee.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Header.jsx
try { (() => {
// Header with logo lockup, nav, click-to-call and sticky quote CTA.
function Header({
  onQuote
}) {
  const {
    Button
  } = window.DEFENDoorDesignSystem_067549;
  const D = window.DD_DATA;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector("[data-scroll-root]") || window;
    const onScroll = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 20);
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.94)" : "var(--white)",
      backdropFilter: scrolled ? "saturate(160%) blur(8px)" : "none",
      borderBottom: `1px solid ${scrolled ? "var(--border-subtle)" : "transparent"}`,
      boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      transition: "all var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 72,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/defendoor-logo.jpg",
    alt: "DEFENDoor \u2014 Protecting what you love",
    style: {
      height: 46,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28
    },
    className: "dd-nav"
  }, [["Models", "#models"], ["Features", "#features"], ["Gallery", "#gallery"], ["Reviews", "#reviews"], ["FAQ", "#faq"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h,
    style: {
      color: "var(--text-body)",
      fontSize: 15,
      fontWeight: 600
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: D.phoneHref,
    className: "dd-phone",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontWeight: 700,
      color: "var(--primary-900)"
    }
  }, /*#__PURE__*/React.createElement(PhoneIcon, null), " ", D.phoneDisplay), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onQuote
  }, "Get My Free Quote"))));
}
function PhoneIcon({
  size = 17,
  color = "var(--brand-cta)"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
  }));
}
Object.assign(window, {
  Header,
  PhoneIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Hero.jsx
try { (() => {
// Hero — full-bleed lifestyle image, headline, trust cues and inline CTA.
function Hero({
  onQuote,
  headline
}) {
  const {
    Button,
    Rating,
    Badge
  } = window.DEFENDoorDesignSystem_067549;
  const D = window.DD_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-dark)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/hero-image.jpg",
    alt: "DEFENDoor retractable security gate installed at a home",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(100deg, rgba(20,32,42,0.92) 0%, rgba(20,32,42,0.72) 42%, rgba(20,32,42,0.15) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      position: "relative",
      paddingTop: 84,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cta"
  }, "31 Years in Business"), /*#__PURE__*/React.createElement(Badge, {
    tone: "dark",
    style: {
      background: "rgba(255,255,255,0.14)",
      color: "#fff"
    }
  }, "Since 1995")), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.08,
      margin: 0
    }
  }, headline), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--primary-200)",
      fontSize: "var(--text-lead)",
      marginTop: 18,
      maxWidth: 520
    }
  }, "Custom-built, solid-steel security gates for homes and businesses. Formidable strength, engineered durability \u2014 the peace of mind you deserve."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onQuote
  }, "Arrange a Free Demo & Quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    href: "#models"
  }, "View the 4 Models")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 30,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: 4.8,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--primary-200)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#fff"
    }
  }, "4.8/5"), " from 107 Google reviews")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/LeadForm.jsx
try { (() => {
// Lead form + thank-you state. Anchored as #quote.
function LeadForm({
  formRef
}) {
  const {
    Input,
    Button,
    Badge
  } = window.DEFENDoorDesignSystem_067549;
  const D = window.DD_DATA;
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "quote",
    ref: formRef,
    style: {
      background: "var(--surface-dark)",
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "center"
    },
    className: "dd-form-wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow",
    style: {
      color: "var(--brand-accent)"
    }
  }, "Free Quote & Demo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontSize: "var(--text-h1)",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      margin: "12px 0 16px"
    }
  }, "Arrange a free demo & quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--primary-200)",
      fontSize: "var(--text-lead)",
      maxWidth: 440
    }
  }, "Tell us about your opening and our team will call you back with a no-obligation quote. We service Johannesburg, Cape Town and Durban within a \xB125km radius."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: D.phoneHref,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "#fff",
      fontWeight: 700,
      fontSize: 18
    }
  }, /*#__PURE__*/React.createElement(PhoneIcon, {
    size: 18
  }), " ", D.phoneDisplay), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${D.email}`,
    style: {
      color: "var(--primary-200)",
      fontSize: 15
    }
  }, D.email))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      borderRadius: "var(--radius-xl)",
      padding: 30,
      boxShadow: "var(--shadow-lg)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "color-mix(in srgb, var(--brand-cta) 18%, white)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 18px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--cta-600)",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), /*#__PURE__*/React.createElement(Badge, {
    tone: "cta"
  }, "Request received"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "14px 0 8px",
      color: "var(--text-heading)"
    }
  }, "Thank you!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginBottom: 20
    }
  }, "You can expect a call from the DEFENDoor team shortly to arrange your free demo and quote."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Submit another request")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "First name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Surname",
    placeholder: "Surname",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@email.co.za",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Contact number",
    type: "tel",
    placeholder: "082 000 0000",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Suburb",
    placeholder: "e.g. Randburg",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Your specific requests",
    as: "textarea",
    rows: 3,
    placeholder: "Opening size, model of interest, timing\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    block: true
  }, "Get My Free Quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      textAlign: "center",
      margin: 0
    }
  }, "No obligation. We'll never share your details."))))));
}
Object.assign(window, {
  LeadForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/LeadForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Models.jsx
try { (() => {
// Models — the four retractable security gate models.
function Models({
  onQuote
}) {
  const {
    SectionHeading,
    ModelCard
  } = window.DEFENDoorDesignSystem_067549;
  const D = window.DD_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "models",
    style: {
      background: "var(--white)",
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Our Range",
    title: "Four models. One uncompromising standard.",
    subtitle: "Every gate is custom-built to fit your opening. Always insist on seeing a sample door before you buy."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20,
      marginTop: 44,
      alignItems: "stretch"
    },
    className: "dd-model-grid"
  }, D.models.map(m => /*#__PURE__*/React.createElement(ModelCard, {
    key: m.name,
    image: `../../assets/models/${m.img}`,
    name: m.name,
    guarantee: m.guarantee,
    specs: m.specs,
    featured: m.featured,
    ctaLabel: "Request a Quote",
    onCta: onQuote
  })))));
}
Object.assign(window, {
  Models
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Models.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Reviews.jsx
try { (() => {
// Reviews — Google reviews on a dark navy band, like the reference's dark section.
function Reviews() {
  const {
    SectionHeading,
    ReviewCard,
    Rating,
    StatBlock
  } = window.DEFENDoorDesignSystem_067549;
  const D = window.DD_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    style: {
      background: "var(--surface-dark)",
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 30,
      alignItems: "center",
      marginBottom: 44
    },
    className: "dd-reviews-head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    eyebrow: "Reviews",
    title: "Loved by homeowners & businesses",
    subtitle: "A 4.8-star average across 107 Google reviews \u2014 real feedback from real DEFENDoor customers."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: 4.8,
    size: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontSize: 32,
      fontWeight: 800,
      marginTop: 6
    }
  }, "4.8/5"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--primary-200)",
      fontSize: 13
    }
  }, "Google rating")), /*#__PURE__*/React.createElement(StatBlock, {
    onDark: true,
    value: "107",
    label: "Reviews"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 18
    },
    className: "dd-reviews-grid"
  }, D.reviews.map(r => /*#__PURE__*/React.createElement(ReviewCard, {
    key: r.name,
    name: r.name,
    quote: r.quote,
    rating: 5
  })))));
}
Object.assign(window, {
  Reviews
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Reviews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/TrustStrip.jsx
try { (() => {
// Trust strip — "Trusted by top brands" client logo wall.
function TrustStrip() {
  const {
    LogoWall
  } = window.DEFENDoorDesignSystem_067549;
  const D = window.DD_DATA;
  const logos = D.clients.map(name => ({
    name,
    src: `../../assets/clients/${name}.jpg`
  }));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--white)",
      padding: "40px 0 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 24
    }
  }, "Trusted by top brands"), /*#__PURE__*/React.createElement(LogoWall, {
    logos: logos,
    columns: 7
  })));
}
Object.assign(window, {
  TrustStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/TrustStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/data.js
try { (() => {
// Content data for the DEFENDoor landing page (verbatim brand copy where given).
window.DD_DATA = {
  phoneDisplay: "0860 333 363",
  phoneHref: "tel:0860333363",
  email: "sales@defendoor.co.za",
  headlines: ["Retractable Security Gates", "Protecting What You Love", "Engineered Strength", "Protecting Your Loved Ones", "The Peace Of Mind You Deserve", "Renowned Strength", "Home Security Gates", "Expandable Security Gates", "Solid Steel Security Gates", "Very Strong", "Solid Steel Gates"],
  features: [{
    img: "features-solid-steel-19mm-uprights.jpg",
    title: "Solid Steel 19mm Uprights",
    desc: "Single-bar solid steel uprights — no plastic, no nylon. 16–19mm depending on model."
  }, {
    img: "features-solid-steel-bottom-track.jpg",
    title: "Solid Steel Bottom Track",
    desc: "Bolted into place with a solid steel bottom track for a rigid, tamper-resistant base."
  }, {
    img: "features-hook-locks.jpg",
    title: "Two Hook Locks",
    desc: "Up to two separate high-security hook locks can be fitted for double the peace of mind."
  }, {
    img: "features-stainless-steel-pop-rivets.jpg",
    title: "Stainless Steel Rivets",
    desc: "All essential rivets are stainless steel — engineered to resist corrosion and force."
  }, {
    img: "features-high-security-star-keys.jpg",
    title: "High-Security Star Keys",
    desc: "Pick-resistant star key locking, far tougher than standard cylinder keys."
  }, {
    img: "features-100-percent-steel.jpg",
    title: "100% Steel Construction",
    desc: "All-steel construction throughout — built to an exceptional, break-in-resistant standard."
  }],
  models: [{
    img: "DX-222.jpg",
    name: "DEFENDoor® DX-222",
    guarantee: "5 Year Guarantee",
    featured: true,
    specs: ["<strong>4 sets</strong> of flights — 2 standard + 2 high-security (5mm zigzags)", "<strong>19mm</strong> single solid steel uprights", "<strong>All steel</strong> — no plastic or nylon parts", "Stainless steel rivets &amp; quieter bottom bolts", "<strong>2</strong> high-security star key hook locks"]
  }, {
    img: "DX-420.jpg",
    name: "DEFENDoor® DX-420",
    guarantee: "5 Year Guarantee",
    specs: ["<strong>4 sets</strong> of flights (diamond crosses)", "<strong>19mm</strong> single solid steel uprights", "<strong>All steel</strong>, stainless steel rivets", "Upgraded quieter bottom bolts", "<strong>2</strong> high-security star key hook locks"]
  }, {
    img: "DX-310.jpg",
    name: "DEFENDoor® DX-310",
    guarantee: "5 Year Guarantee",
    specs: ["<strong>3 sets</strong> of flights (diamond crosses)", "<strong>19mm</strong> single solid steel uprights", "<strong>All steel</strong>, stainless steel rivets", "Single high-security star key hook lock", "1 high-security star key lock"]
  }, {
    img: "DX-215.jpg",
    name: "DEFENDoor® DX-215",
    guarantee: "2 Year Guarantee",
    specs: ["<strong>2 sets</strong> standard flights + 1 half flight", "<strong>16mm</strong> single steel bar", "SABS-approved aluminium rivets", "Nylon 6 bolts that lock into the track &amp; spin", "Single high-security star key hook lock"]
  }],
  gallery: Array.from({
    length: 11
  }, (_, i) => `gallery-image-${i + 1}.jpg`),
  reviews: [{
    name: "Sherwin Warries",
    quote: "Not many companies out there with quality services like DEFENDoor anymore — Highly Recommend!"
  }, {
    name: "Michelle le Roux",
    quote: "Returning customer, and excellent service received again. Their security gates are exceptional, and the service is unbeatable. Loyal customer for life."
  }, {
    name: "Zaid Dollie",
    quote: "Service was immaculately fast, clean and tidy for a reasonable price. Would recommend to anyone looking for this service 10/10."
  }, {
    name: "Rumbidzai Munjodzi",
    quote: "Hugo, you went above and beyond, even responding to my messages after hours with solutions. Very impressed by DEFENDoor's service."
  }],
  clients: ["JB Active", "KFC", "Exclusive Books", "Torga Optical", "Cell C", "The Crazy Store", "HiFi Corp", "Nestle", "Dis-Chem", "Standard Bank", "JD Group", "Lewis", "Lovisa", "Pepkor"],
  faq: [{
    q: "How strong are DEFENDoor security doors?",
    a: "Our doors are constructed with reinforced steel and tamper-resistant frames designed to resist crowbars, kicks, and bolt cutters."
  }, {
    q: "Can the gates be customised to fit non-standard sizes?",
    a: "Yes. We specialise in custom solutions and can manufacture to fit any doorway."
  }, {
    q: "What finishes or colours are available?",
    a: "We offer a wide range of powder-coated finishes, including black, white, bronze, and custom colours on request."
  }, {
    q: "Do you offer installation across South Africa?",
    a: "Yes, we install in Johannesburg, Cape Town, Overberg, and Durban, with nationwide delivery available for self-installation."
  }, {
    q: "What maintenance do the gates require?",
    a: "Minimal. Wipe down occasionally and apply rust-resistant spray annually if in coastal areas. Care instructions are available on the website."
  }, {
    q: "Can DEFENDoor products be used in complexes or estates?",
    a: "Absolutely. We work with HOAs and body corporates to meet aesthetic and regulatory guidelines."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.ModelCard = __ds_scope.ModelCard;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

})();
