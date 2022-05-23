import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("Should render without errors", () => {
    render(<App />);
    expect(screen.getByText(/equilibrium #3429/i)).toBeInTheDocument();
  });
});
