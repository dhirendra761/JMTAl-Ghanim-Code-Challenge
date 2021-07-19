import React from "react";
import Form from "./form_components/Form";
import Products from "./device_components/Products";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="center">1st Assigment</h1>
      <h3 className="center">
        Create a form with 5-6 input fields and submit the values to a back end
        service.
      </h3>
      <Form />
      <h1 className="center">2nd Assigment</h1>
      <h3 className="center">
        Create a device listing page, check below URL for detail. Assume that
        the data for each device shall come from a back end service
      </h3>
      <Products />
    </>
  );
}

export default App;
