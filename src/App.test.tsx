import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the home view at the root route", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /animate ideas/i, level: 1 }),
    ).toBeInTheDocument();
  });
});
