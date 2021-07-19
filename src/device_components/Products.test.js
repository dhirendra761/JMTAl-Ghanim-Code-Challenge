import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Products from "./Products";

describe("Products", () => {
  test("Checking if Products is mounted", () => {
    render(<Products />);
  });

  test("renders when the item list is not empty", () => {
    const container = document.createElement("div");
    ReactDOM.render(<Products />, container);
    expect(container.textContent).toMatch("HeadPHONESRayes");
  });
});
