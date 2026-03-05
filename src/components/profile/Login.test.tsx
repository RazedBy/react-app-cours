import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

// ✅ Mock API fictive
jest.mock("../../services/api-service", () => ({
  checkPassword: jest.fn(),
}));

// ✅ Mock notifications
jest.mock("../../services/Notications", () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// ✅ Mock navigation
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

import { checkPassword } from "../../services/api-service";
import NotificationService from "../../services/Notications";

describe("Login (fictif, sans API)", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // mock reload
    Object.defineProperty(window, "location", {
      value: { ...window.location, reload: jest.fn() },
      writable: true,
    });

    // spy localStorage.setItem
    jest.spyOn(window.localStorage.__proto__, "setItem").mockImplementation(() => {});
  });

  test("affiche le formulaire", () => {
    render(<Login />);

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("succès: avec identifiants fictifs => token stocké, notif success, navigate + reload", async () => {
    // ✅ données fictives
    const fakeUsername = "leo";
    const fakePassword = "password123";
    const fakeToken = "FAKE_TOKEN_ABC";

    // API fictive : renvoie un token
    (checkPassword as jest.Mock).mockResolvedValue(fakeToken);

    const user = userEvent.setup();
    render(<Login />);

    await user.type(screen.getByLabelText(/username/i), fakeUsername);
    await user.type(screen.getByLabelText(/password/i), fakePassword);
    await user.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => expect(checkPassword).toHaveBeenCalledTimes(1));

    expect(checkPassword).toHaveBeenCalledWith(fakeUsername, fakePassword);
    expect(window.localStorage.setItem).toHaveBeenCalledWith("accessToken", fakeToken);

    expect(NotificationService.success).toHaveBeenCalledWith("Authentification success");
    expect(mockNavigate).toHaveBeenCalledWith("/");
    expect(window.location.reload).toHaveBeenCalled();
  });

  test("échec: identifiants fictifs incorrects => notif error, pas de token, pas de navigate", async () => {
    const fakeUsername = "leo";
    const fakePassword = "wrongpass";

    // API fictive : renvoie null => échec
    (checkPassword as jest.Mock).mockResolvedValue(null);

    const user = userEvent.setup();
    render(<Login />);

    await user.type(screen.getByLabelText(/username/i), fakeUsername);
    await user.type(screen.getByLabelText(/password/i), fakePassword);
    await user.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => expect(checkPassword).toHaveBeenCalledTimes(1));

    expect(checkPassword).toHaveBeenCalledWith(fakeUsername, fakePassword);
    expect(NotificationService.error).toHaveBeenCalledWith("Authentification Error");

    expect(window.localStorage.setItem).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(window.location.reload).not.toHaveBeenCalled();
  });
});