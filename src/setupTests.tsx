import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import App from "./App" 
test("renders text", () => {
  render(<App />)
  expect(screen.getByText(/hello/i)).toBeInTheDocument()
})