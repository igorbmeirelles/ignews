import { render, screen, waitFor } from "@testing-library/react";
import { Async } from ".";
describe("Async behavior", () => {
  it("renders correctley", async () => {
    render(<Async />);

    expect(screen.getByText("Hello world")).toBeInTheDocument();
    await waitFor(() => {
      return expect(screen.getByText("Button")).toBeInTheDocument();
    });
  });
});
