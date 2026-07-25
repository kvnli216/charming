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
import { buttonRecipe } from "./recipes";

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
    recipes: {
      button: buttonRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);
