import { render } from "@testing-library/react";
import DashboardPage from "./page";

describe("Dashboard Snapshot", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<DashboardPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
