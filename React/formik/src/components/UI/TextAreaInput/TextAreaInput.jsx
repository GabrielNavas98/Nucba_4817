import React from "react";
import { InputBoxStyled, InputLabelStyled } from "../Input/InputStyles";
import { TextArea, ErrorStyled } from "./TextAreaInputStyles";
import { ErrorMessage, Field } from "formik";

const TextAreaInput = ({ label, name, isError}) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <Field 
        id={label} 
        name={name}
        error={isError}
        as={TextArea}
      />
      <ErrorMessage name={name} component={ErrorStyled} />
    </InputBoxStyled>
  );
};

export default TextAreaInput;
