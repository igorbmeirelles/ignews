import { render, screen } from "@testing-library/react";
import Home from "../../pages";

jest.mock("next-auth/react", () => {
  return {
    useSession() {
      return {
        data: null,
        status: "unauthenticated",
      };
    },
  };
});

describe("Home page", () => {
  it("renders correctly", () => {
    render(<Home product={{ priceId: "fake-priceId", amount: "$32,00" }} />);

    expect(screen.getByText("for $32,00 month")).toBeInTheDocument();
  });
});
