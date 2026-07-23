import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the reel view at the root route", () => {
    render(<App />);
    expect(screen.getByTitle(/MOTION REEL/i)).toBeInTheDocument();
  });
});
