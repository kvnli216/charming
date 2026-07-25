// Button/IconButton recipe ported from the Sabrina Chen Design System
// (components/components.css, .sc-btn / .sc-icon-btn). Chakra's own default
// button recipe uses its own height/padding/gap scale which doesn't line up
// with the design system's literal 36/44/52px sizes, so we replace it
// wholesale rather than layering size overrides on top per-usage.
import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  className: "sc-btn",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    fontFamily: "body",
    fontWeight: "semibold",
    borderRadius: "pill",
    borderWidth: "1px",
    borderColor: "transparent",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    transitionProperty: "background, color, border-color, transform",
    transitionDuration: "standard",
    transitionTimingFunction: "standard",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "focusRing",
      outlineOffset: "2px",
    },
    _disabled: {
      opacity: 0.45,
      cursor: "not-allowed",
    },
  },
  variants: {
    size: {
      sm: { height: "36px", minW: "36px", px: "16px", fontSize: "0.875rem" },
      md: { height: "44px", minW: "44px", px: "22px", fontSize: "0.9375rem" },
      lg: { height: "52px", minW: "52px", px: "28px", fontSize: "1rem" },
    },
    variant: {
      solid: {
        bg: "accent.solid",
        color: "white",
        _hover: { bg: "accent.solidHover" },
      },
      outline: {
        bg: "transparent",
        borderColor: "border.strong",
        color: "fg.primary",
        _hover: { bg: "surface.sunken" },
      },
      ghost: {
        bg: "transparent",
        color: "fg.primary",
        _hover: { bg: { base: "surface.sunken", _dark: "whiteAlpha.200" } },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});
