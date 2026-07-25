// Design tokens ported 1:1 from the Sabrina Chen Design System
// (Claude Design project e591f279-6751-494b-888a-b80ad32e30f5, tokens/*.css).
// Gold scale retuned so `gold.500` lands on the brand's specified social-icon
// color (#F3BE3F) rather than the design system's default gold.
import { defineTokens } from "@chakra-ui/react";

export const colors = defineTokens.colors({
  neutral: {
    0: { value: "oklch(99% 0.004 80)" },
    50: { value: "oklch(97.5% 0.006 80)" },
    100: { value: "oklch(94.5% 0.008 75)" },
    200: { value: "oklch(89% 0.01 75)" },
    300: { value: "oklch(80% 0.012 70)" },
    400: { value: "oklch(66% 0.014 65)" },
    500: { value: "oklch(52% 0.014 60)" },
    600: { value: "oklch(40% 0.012 55)" },
    700: { value: "oklch(30% 0.01 50)" },
    800: { value: "oklch(20% 0.008 45)" },
    900: { value: "oklch(13% 0.006 40)" },
    950: { value: "oklch(9% 0.005 40)" },
  },
  accent: {
    50: { value: "oklch(96% 0.02 260)" },
    100: { value: "oklch(91% 0.045 260)" },
    200: { value: "oklch(84% 0.08 261)" },
    300: { value: "oklch(75% 0.12 262)" },
    400: { value: "oklch(62% 0.19 263)" },
    500: { value: "oklch(51% 0.23 264)" },
    600: { value: "oklch(44% 0.21 264)" },
    700: { value: "oklch(37% 0.18 264)" },
    800: { value: "oklch(29% 0.14 264)" },
  },
  // Retuned so `500` = #F3BE3F (the brand's chosen social-icon gold), shifting
  // the design system's default y-* scale by the same L/H delta throughout.
  gold: {
    50: { value: "oklch(100% 0.030 105.0)" },
    100: { value: "oklch(100% 0.070 105.0)" },
    200: { value: "oklch(99% 0.110 103.0)" },
    300: { value: "oklch(92% 0.140 98.0)" },
    400: { value: "oklch(87% 0.150 92.0)" },
    500: { value: "oklch(83% 0.150 85.0)" },
    600: { value: "oklch(72% 0.130 80.0)" },
    700: { value: "oklch(60% 0.110 75.0)" },
  },
  peach: {
    50: { value: "oklch(97% 0.02 40)" },
    100: { value: "oklch(92% 0.05 38)" },
    200: { value: "oklch(87% 0.08 36)" },
    300: { value: "oklch(81% 0.11 34)" },
    400: { value: "oklch(76% 0.12 33)" },
    500: { value: "oklch(72% 0.13 32)" },
    600: { value: "oklch(60% 0.11 30)" },
    700: { value: "oklch(48% 0.09 28)" },
  },
  danger: {
    solid: { value: "oklch(58% 0.19 25)" },
    text: { value: "oklch(48% 0.18 25)" },
    tint: { value: "oklch(95% 0.03 25)" },
  },
});

export const fonts = defineTokens.fonts({
  heading: { value: "'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif" },
  body: { value: "'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif" },
  mono: { value: "'IBM Plex Mono', ui-monospace, 'SF Mono', monospace" },
});

export const fontSizes = defineTokens.fontSizes({
  display1: { value: "clamp(2.75rem, 4.5rem, 5rem)" },
  display2: { value: "clamp(2.25rem, 3.25rem, 3.5rem)" },
  h1: { value: "clamp(1.9rem, 2.2rem, 2.5rem)" },
  h2: { value: "1.75rem" },
  h3: { value: "1.375rem" },
  h4: { value: "1.125rem" },
  bodyLg: { value: "1.125rem" },
  body: { value: "1rem" },
  bodySm: { value: "0.9375rem" },
  caption: { value: "0.8125rem" },
  mono: { value: "0.75rem" },
});

export const lineHeights = defineTokens.lineHeights({
  tight: { value: "1.08" },
  heading: { value: "1.18" },
  body: { value: "1.55" },
  mono: { value: "1.4" },
});

export const letterSpacings = defineTokens.letterSpacings({
  tight: { value: "-0.02em" },
  normal: { value: "0" },
  mono: { value: "0.04em" },
});

export const fontWeights = defineTokens.fontWeights({
  regular: { value: "400" },
  medium: { value: "500" },
  semibold: { value: "600" },
  bold: { value: "700" },
  extrabold: { value: "800" },
});

export const spacing = defineTokens.spacing({
  1: { value: "4px" },
  2: { value: "8px" },
  3: { value: "12px" },
  4: { value: "16px" },
  5: { value: "24px" },
  6: { value: "32px" },
  7: { value: "48px" },
  8: { value: "64px" },
  9: { value: "96px" },
  10: { value: "128px" },
});

export const radii = defineTokens.radii({
  xs: { value: "4px" },
  sm: { value: "6px" },
  md: { value: "10px" },
  lg: { value: "16px" },
  xl: { value: "24px" },
  pill: { value: "999px" },
});

export const durations = defineTokens.durations({
  fast: { value: "150ms" },
  standard: { value: "200ms" },
  slow: { value: "250ms" },
});

export const easings = defineTokens.easings({
  standard: { value: "cubic-bezier(0.3, 0, 0.15, 1)" },
});
