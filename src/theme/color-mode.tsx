"use client";

import { IconButton, type IconButtonProps, Skeleton } from "@chakra-ui/react";
import { ThemeProvider, useTheme, type ThemeProviderProps } from "next-themes";
import { forwardRef, useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export function ColorModeProvider(props: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
}

export type ColorMode = "light" | "dark";

export function useColorMode() {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = (forcedTheme || resolvedTheme) as ColorMode | undefined;

  const toggleColorMode = () => {
    setTheme(colorMode === "dark" ? "light" : "dark");
  };

  return {
    colorMode: colorMode ?? "light",
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

export const ColorModeButton = forwardRef<HTMLButtonElement, Omit<IconButtonProps, "aria-label">>(
  function ColorModeButton(props, ref) {
    const { colorMode, toggleColorMode } = useColorMode();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) {
      return <Skeleton boxSize="8" borderRadius="full" />;
    }

    return (
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
      >
        {colorMode === "dark" ? <LuMoon /> : <LuSun />}
      </IconButton>
    );
  },
);
