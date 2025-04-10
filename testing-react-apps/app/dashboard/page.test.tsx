import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DashboardPage from "./page";

describe("Dashboard", () => {
  it("renders a heading", () => {
    render(<DashboardPage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
