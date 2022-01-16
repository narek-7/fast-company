import React, { useEffect, useState } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const Login = () => {
   const [data, setData] = useState({ email: "", password: "" });
   const [errors, setErrors] = useState({});

   const handleChange = ({ target }) => {
      setData((prevState) => ({
         ...prevState,
         [target.name]: target.value
      }));
   };

   const validatorConfig = {
      email: {
         isRequired: { message: "Email is Required" },
         isEmail: { message: "Email is incorrect" }
      },
      password: {
         isRequired: { message: "Password is Required" },
         isCapitalSymbol: {
            message: "Must contain at least one capital letter"
         },
         isContainDigit: {
            message: "Must contain at least one digit"
         },
         min: {
            message: "Password must be at least 8 characters",
            value: 8
         }
      }
   };

   useEffect(() => {
      validate();
   }, [data]);

   const validate = () => {
      const errors = validator(data, validatorConfig);
      setErrors(errors);
      return Object.keys(errors).length === 0;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const isValid = validate();
      if (!isValid) return;
      console.log(data);
   };

   return (
      <form onSubmit={handleSubmit}>
         <TextField
            label="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
            error={errors.email}
         />
         <TextField
            label="Password"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            error={errors.password}
         />
         {/* for creating not submit button, we need to change the type of  the button */}
         <button type="submit">Submit</button>
      </form>
   );
};

export default Login;
