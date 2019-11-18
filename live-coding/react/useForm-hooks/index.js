import React from "react";
import ReactDOM from "react-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";

import useForm from "./useForm";

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .required()
});

function App() {
  const { value, handleChange, handleSubmit, checkValidity, errors, sendable } = useForm(
    {
      email: "",
      password: ""
    },
    schema
  );

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            value={value.email}
            onChange={handleChange}
            onBlur={checkValidity}
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            value={value.password}
            onChange={handleChange}
            onBlur={checkValidity}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </FormGroup>
        {errors && errors.map(err => <p>{err}</p>)}

        <Button disabled={!sendable} color={sendable ? "success" : "danger"}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
