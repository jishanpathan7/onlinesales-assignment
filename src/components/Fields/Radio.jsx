// RadioComponent.jsx
import React from "react";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const RadioComponent = ({ label, register, options }) => (
  <FormControl
    component="fieldset"
    sx={{
      width: "100%",
    }}
  >
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup row {...register}>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option.value}
          control={<Radio />}
          label={option.name}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

export default RadioComponent;
