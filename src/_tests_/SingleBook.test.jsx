import { render, screen, fireEvent } from "@testing-library/react";
import SingleBook from "../components/SingleBook";

describe("SingleBook testing", () => {
  it("makes book card border change clicking on it", () => {
    render(<SingleBook />);
    const allTheBookCards = screen.getAllByTestId("book-card");
    const firstBookCard = allTheBookCards[0];

    // Simula la funzione changeSelectedBook passando un asin
    fireEvent.click(firstBookCard);

    // Verifica che il bordo della carta del libro sia stato aggiornato correttamente
    expect(firstBookCard).toHaveStyle("border: 3px solid red");
  });
});
