import React, { useState } from "react";
import TFrom from "../Common/TFrom";
import { Heading } from "rsuite";
import { registerFrom } from "@/src/utils/fromData";
import TButton from "../Common/TButton";

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    is_accept: false,
  });

  const handleChange = (name: string, value: string | boolean) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formValues.is_accept) {
      console.log("Form Submitted: ", formValues);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
        gap: "20px", // Add space between fields
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <div>
        <Heading>Register </Heading>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "20px", // Add space between fields
          justifyContent: "space-between",
        }}
      >
        {registerFrom.map((field) => (
          <TFrom
            key={field.name}
            title={field.title}
            placeholder={field.placeholder}
            type={field.type.toLowerCase() as "input" | "password"}
            name={field.name}
            value={formValues[field.name as keyof typeof formValues]}
            onChange={handleChange}
          />
        ))}
      </div>

      <div>
        <TFrom
          title="Terms and Conditions"
          placeholder={
            <>
              I accept the{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                Terms and Conditions
              </a>
            </>
          }
          name="is_accept"
          type="terms"
          value={formValues.is_accept}
          onChange={handleChange}
        />
      </div>
      <div style={{ margin: "20px" }}>
        <TButton label="Register" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default RegisterForm;
