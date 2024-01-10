// TextFieldComponent.jsx
import React from "react";
import { TextField } from "@mui/material";

const TextFieldComponent = ({ label, register, error }) => (
  <TextField
    label={label}
    {...register}
    sx={{
      width: '100%',
    }}
    error={!!error}
    helperText={error && "This field is required"}
    placeholder="write something..."
  />
);

export default TextFieldComponent;
