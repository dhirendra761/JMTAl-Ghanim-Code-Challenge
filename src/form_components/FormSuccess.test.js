import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import FormSuccess from "./FormSuccess";

describe("FormSuccess", () => {
  test("Checking if FormSuccess is mounted", () => {
    render(<FormSuccess />);
  });

  test("renders when the FormSuccess Component is not empty", () => {
    const container = document.createElement("div");
    ReactDOM.render(<FormSuccess />, container);
    expect(container.textContent).toMatch("We have received your request!");
  });
});
