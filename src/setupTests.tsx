import "@testing-library/jest-dom";

const originalWarn = console.warn;
const originalError = console.error;

beforeAll(() => {
  console.warn = (...args: any[]) => {
    const msg = String(args[0] ?? "");
    if (msg.includes("React Router Future Flag Warning")) return;
    originalWarn(...args);
  };

  // si tu veux aussi masquer le warning key (mais je te conseille plutôt de le corriger)
  console.error = (...args: any[]) => {
    const msg = String(args[0] ?? "");
    if (msg.includes("Each child in a list should have a unique \"key\" prop")) return;
    originalError(...args);
  };
});

afterAll(() => {
  console.warn = originalWarn;
  console.error = originalError;
});