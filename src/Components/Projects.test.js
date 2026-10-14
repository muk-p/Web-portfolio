import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import Projects from "./Projects";

afterEach(() => {
  jest.restoreAllMocks();
});

test("starts a demo login from the task manager card and hands the session to the dashboard", async () => {
  const dashboardWindow = { postMessage: jest.fn(), close: jest.fn() };
  const openSpy = jest.spyOn(window, "open").mockReturnValue(dashboardWindow);
  const fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue({
    ok: true,
    json: async () => ({
      token: "demo-jwt",
      user: { role: "manager", isDemo: true },
    }),
  });

  render(<Projects />);

  const demoButton = screen.getByRole("button", {
    name: "Explore Manager Dashboard (Demo)",
  });
  const managerCard = demoButton.closest(".project-card");
  const storeCard = screen
    .getByRole("heading", { name: "Pixel-Plays Online Store" })
    .closest(".project-card");

  expect(
    within(managerCard).getByRole("heading", {
      name: "Pixel-Plays Task Manager",
    })
  ).toBeInTheDocument();
  expect(
    within(storeCard).queryByRole("button", {
      name: "Explore Manager Dashboard (Demo)",
    })
  ).not.toBeInTheDocument();

  fireEvent.click(demoButton);

  expect(openSpy).toHaveBeenCalledWith("https://www.pixelplays.co.ke", "_blank");
  await waitFor(() => expect(fetchSpy).toHaveBeenCalledTimes(1));
  expect(fetchSpy).toHaveBeenCalledWith(
    expect.stringMatching(/\/api\/auth\/demo-login$/),
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }
  );

  const sendDashboardMessage = (data) => {
    const event = new Event("message");
    Object.assign(event, {
      origin: "https://www.pixelplays.co.ke",
      source: dashboardWindow,
      data,
    });
    act(() => window.dispatchEvent(event));
  };

  sendDashboardMessage({ type: "pixelplays-demo-ready" });
  await waitFor(() => {
    expect(dashboardWindow.postMessage).toHaveBeenCalledWith(
      {
        type: "portfolio-demo-session",
        token: "demo-jwt",
        user: { role: "manager", isDemo: true },
      },
      "https://www.pixelplays.co.ke"
    );
  });

  sendDashboardMessage({ type: "pixelplays-demo-session-received" });
  expect(await screen.findByRole("status")).toHaveTextContent(
    "Read-only demo opened in a new tab."
  );
});
