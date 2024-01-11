import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
describe("filter testing", () => {
  it("finds just one result for the word 'arrow'", () => {
    render(<App />);
    const filterInputField = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(filterInputField, { target: { value: "arrows" } });
    const allTheBookCards = screen.getAllByTestId("book");
    expect(allTheBookCards).toHaveLength(1);
  });

  it("finds three results for the word 'witcher'", () => {
    render(<App />);
    const filterInputField = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(filterInputField, { target: { value: "witcher" } });
    const allTheBookCards = screen.getAllByTestId("book");
    expect(allTheBookCards).toHaveLength(3);
  });
});
