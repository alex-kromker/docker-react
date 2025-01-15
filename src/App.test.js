import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Love you baby text", () => {
  render(<App />);
  const linkElement = screen.getByText(/I love you baby/i);
  expect(linkElement).toBeInTheDocument();
});
