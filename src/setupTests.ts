import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement matchMedia; next-themes (used for Chakra color mode)
// needs it to detect the OS color-scheme preference.
if (!window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  } as unknown as MediaQueryList);
}
