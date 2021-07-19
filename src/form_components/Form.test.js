import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  test("Checking if Form is mounted", () => {
    render(<Form />);
  });

  test("renders when Form Component is not empty", () => {
    const container = document.createElement("div");
    ReactDOM.render(<Form />, container);
    expect(container.textContent).toMatch(
      "Create your account by filling out the information below"
    );
  });
});
