// DropdownComponent.jsx
import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const DropdownComponent = ({ label, register, options, error }) => (
  <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select {...register} error={!!error} value={options[0].value}>
      {options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default DropdownComponent;
