import React, { useState, useEffect } from "react";

export default function useForm(initialState, schema) {
  const [value, setValue] = useState(initialState);
  const [errors, setErrors] = useState(null);
  const [sendable, setSendable] = useState(false);

  useEffect(() => {
    checkValidity();
  }, [value]);

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Send !");
  };

  const checkValidity = async () => {
    try {
      await schema.validate(value, { abortEarly: false });
      setErrors(null);
      setSendable(true);
    } catch (err) {
      setErrors(err.errors);
      console.log(err);
    }
  };

  return {
    value,
    handleChange,
    handleSubmit,
    checkValidity,
    errors,
    sendable
  };
}
