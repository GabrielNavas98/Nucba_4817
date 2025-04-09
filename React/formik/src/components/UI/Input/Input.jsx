import React from "react";
import {
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
  ErrorStyled,
} from "./InputStyles";
import { ErrorMessage, Field } from "formik";

const Input = ({ label, type, name, isError}) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <Field 
        type={type} 
        id={label}
        name={name}
        error={isError} 
        as={InputStyled}
      />
      <ErrorMessage name={name} component={ErrorStyled}/>
    </InputBoxStyled>
  );
};

export default Input;
