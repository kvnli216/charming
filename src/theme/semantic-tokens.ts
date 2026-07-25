// Semantic tokens ported from tokens/colors.css and tokens/effects.css's
// `:root` (light) vs `[data-theme="dark"]` (dark) blocks.
import { defineSemanticTokens } from "@chakra-ui/react";

export const semanticColors = defineSemanticTokens.colors({
  surface: {
    page: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.950}" } },
    card: { value: { base: "white", _dark: "{colors.neutral.900}" } },
    panelDark: { value: { base: "{colors.neutral.900}", _dark: "oklch(6% 0.004 40)" } },
    sunken: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.900}" } },
    overlay: { value: { base: "oklch(13% 0.006 40 / 0.6)", _dark: "oklch(0% 0 0 / 0.6)" } },
  },
  fg: {
    primary: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.50}" } },
    secondary: { value: { base: "{colors.neutral.600}", _dark: "{colors.neutral.300}" } },
    tertiary: { value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.500}" } },
    onDark: { value: "{colors.neutral.50}" },
    onDarkSecondary: { value: "{colors.neutral.300}" },
    accent: { value: { base: "{colors.accent.700}", _dark: "{colors.accent.300}" } },
  },
  border: {
    subtle: { value: { base: "{colors.neutral.100}", _dark: "oklch(100% 0 0 / 0.08)" } },
    default: { value: { base: "{colors.neutral.200}", _dark: "oklch(100% 0 0 / 0.14)" } },
    strong: { value: { base: "{colors.neutral.400}", _dark: "oklch(100% 0 0 / 0.24)" } },
    onDark: { value: { base: "oklch(100% 0 0 / 0.12)", _dark: "oklch(100% 0 0 / 0.14)" } },
  },
  accent: {
    solid: { value: "{colors.accent.500}" },
    solidHover: { value: { base: "{colors.accent.600}", _dark: "{colors.accent.400}" } },
    text: { value: { base: "{colors.accent.700}", _dark: "{colors.accent.300}" } },
    tint: { value: { base: "{colors.accent.50}", _dark: "oklch(30% 0.08 264 / 0.35)" } },
    tagBg: { value: { base: "{colors.accent.100}", _dark: "oklch(30% 0.09 264 / 0.4)" } },
    tagFg: { value: { base: "{colors.accent.700}", _dark: "{colors.accent.300}" } },
    tagAltBg: { value: { base: "{colors.gold.100}", _dark: "oklch(35% 0.08 70 / 0.35)" } },
    tagAltFg: { value: { base: "{colors.gold.700}", _dark: "{colors.gold.300}" } },
  },
  // Drives social icons (footer, About/Connect) per the brand's gold-not-peach decision.
  accentOnDark: {
    solid: { value: "{colors.gold.500}" },
    solidHover: { value: "{colors.gold.400}" },
    text: { value: "{colors.gold.400}" },
  },
  focusRing: { value: "{colors.accent.500}" },
  danger: {
    solid: { value: "{colors.danger.solid}" },
    text: { value: "{colors.danger.text}" },
    tint: { value: "{colors.danger.tint}" },
  },
});

export const semanticShadows = defineSemanticTokens.shadows({
  sm: {
    value: {
      base: "0 1px 2px oklch(20% 0.01 60 / 0.06), 0 1px 1px oklch(20% 0.01 60 / 0.04)",
      _dark: "0 1px 2px oklch(0% 0 0 / 0.3)",
    },
  },
  md: {
    value: {
      base: "0 4px 12px oklch(20% 0.01 60 / 0.08), 0 2px 4px oklch(20% 0.01 60 / 0.05)",
      _dark: "0 4px 12px oklch(0% 0 0 / 0.35)",
    },
  },
  lg: {
    value: {
      base: "0 12px 32px oklch(20% 0.01 60 / 0.10), 0 4px 10px oklch(20% 0.01 60 / 0.06)",
      _dark: "0 12px 32px oklch(0% 0 0 / 0.4)",
    },
  },
});
