import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
describe("Is Welcome mounting correctly Welcome", () => {
  it("mounts the Welcome component correctly", () => {
    render(<Welcome />);
    const WelcomeComponent = screen.getByRole("alert");
    expect(WelcomeComponent).toBeInTheDocument();
    const AlertText = screen.getByText("Benvenuti in EpiBooks!");
    expect(AlertText).toBeInTheDocument();
  });
});
