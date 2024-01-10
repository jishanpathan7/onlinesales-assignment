// CheckboxComponent.jsx
import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

const CheckboxComponent = ({ label, register, options }) => (
  <FormControlLabel  sx={{
    width: '100%',
  }} control={<Checkbox {...register} />} label={label} />
);

export default CheckboxComponent;
