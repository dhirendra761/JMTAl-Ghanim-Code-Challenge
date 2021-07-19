import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import FormSignup from "./FormSignup";

describe("FormSignup", () => {
  test("Checking if FormSignup is mounted", () => {
    render(<FormSignup />);
  });

  test("renders when FormSignup Component is not empty", () => {
    const container = document.createElement("div");
    ReactDOM.render(<FormSignup />, container);
    expect(container.textContent).toMatch(
      "UsernameEmailPasswordConfirm PasswordSign"
    );
  });
});
