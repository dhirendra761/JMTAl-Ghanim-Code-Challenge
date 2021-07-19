import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("Checking if App is mounted", () => {
    render(<App />);
  });

  test("renders when the App Component is not empty", () => {
    const container = document.createElement("div");
    ReactDOM.render(<App />, container);
    expect(container.textContent).toMatch("1st Assigment");
  });
  test("App component render correctly with all data from JSON", async () => {
    const { container, getAllByText } = render(<App />);
    ReactDOM.render(<App />, container);
    expect(getAllByText("Add to cart").length).toBe(9);
  });
});
