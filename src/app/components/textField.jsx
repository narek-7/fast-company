import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
   const [showPassword, setShowPassword] = useState(false);
   const getInputClasses = () => {
      return "form-control" + (error ? " is-invalid" : "");
   };

   const showTogglePasswords = () => {
      setShowPassword((prevState) => !prevState);
   };

   return (
      <div className="mb-4">
         <label htmlFor={name}>{label}</label>
         <div className="input-group">
            <input
               type={showPassword ? "text" : type}
               id={name}
               value={value}
               onChange={onChange}
               name={name}
               className={getInputClasses()}
            />
            {type === "password" && (
               <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={showTogglePasswords}
               >
                  <i
                     className={"bi bi-eye" + (showPassword ? "-slash" : "")}
                  ></i>
               </button>
            )}
            {error && <div className="invalid-feedback">{error}</div>}
         </div>
      </div>
   );
};

TextField.defaultProps = {
   type: "text"
};

TextField.propTypes = {
   label: PropTypes.string,
   type: PropTypes.string,
   name: PropTypes.string,
   value: PropTypes.string,
   onChange: PropTypes.func,
   error: PropTypes.string
};

export default TextField;
