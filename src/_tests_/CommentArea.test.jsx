import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("Is CommentArea mounting correctly", () => {
  it("mounts the CommentArea component correctly", () => {
    render(<CommentArea />);
    const commentArea = screen.getByTestId("comment-area");
    expect(commentArea).toBeInTheDocument();
  });
});
