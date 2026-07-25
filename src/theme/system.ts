import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  letterSpacings,
  fontWeights,
  spacing,
  radii,
  durations,
  easings,
} from "./tokens";
import { semanticColors, semanticShadows } from "./semantic-tokens";

const config = defineConfig({
  theme: {
    tokens: {
      colors,
      fonts,
      fontSizes,
      lineHeights,
      letterSpacings,
      fontWeights,
      spacing,
      radii,
      durations,
      easings,
    },
    semanticTokens: {
      colors: semanticColors,
      shadows: semanticShadows,
    },
  },
});

export const system = createSystem(defaultConfig, config);
