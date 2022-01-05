import { render, screen, fireEvent } from "@testing-library/react";
import { SubscribeButton } from ".";
import { mocked } from "jest-mock";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

jest.mock("next-auth/react");

jest.mock("next/router");

describe("SubscribeButton component", () => {
  it("renders correctly", () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<SubscribeButton priceId="1234" />);

    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });

  it("redirects user to signIn when not authenticated", () => {
    const signInMocked = mocked(signIn);

    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<SubscribeButton priceId="1234" />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });

  it("redirects to posts when user already has a subscription", () => {
    const useRouterMocked = mocked(useRouter);
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: { name: "John Doe", email: "JohnDoe@example.com" },
        activeSubscription: "fake-active-subscription",
        expires: "fake-expires",
      },
      status: "authenticated",
    });

    const pushMock = jest.fn();

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any);

    render(<SubscribeButton priceId="1234" />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(pushMock).toHaveBeenCalled();
  });
});
