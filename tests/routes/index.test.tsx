import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Index from "~/routes";

test("test1", () => {
  render(<Index />);

  expect(screen.getByText("Welcome to Remix")).toBeInTheDocument();
});
