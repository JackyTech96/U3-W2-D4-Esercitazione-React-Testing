import { render, screen } from "@testing-library/react";
import AllTheBooks from "../components/AllTheBooks";
import fantasy from "../data/fantasy.json";

describe("AllTheBooks Component", () => {
  it("renders cards for all books", () => {
    render(<AllTheBooks />);

    const cards = screen.getAllByTestId("book");
    expect(cards).toHaveLength(fantasy.length);
  });
});
