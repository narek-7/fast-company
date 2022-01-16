import React, { useEffect, useState } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const Login = () => {
   const [data, setData] = useState({ email: "", password: "" });
   const [errors, setErrors] = useState({});

   const isValid = Object.keys(errors).length === 0;

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
      <div className="container mt-5">
         <div className="row">
            <div className="col-md-6 offset-md-3 shadow p-4">
               <h3 className="mb-4">Login</h3>
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
                  <button
                     type="submit"
                     disabled={!isValid}
                     className="btn btn-primary w-100 mx-auto"
                  >
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;
