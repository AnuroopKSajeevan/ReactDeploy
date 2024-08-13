// src/App.test.js
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For custom matchers
import App from "./App";

test("renders Project List heading", async () => {
  render(<App />);

  // Wait for the component to finish loading the data
  await waitFor(() => {
    // Check if the "Project List" heading is present
    const headingElement = screen.getByText(/project list/i);
    expect(headingElement).toBeInTheDocument();
  });
});
