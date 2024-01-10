// TextAreaComponent.jsx
import React from 'react';
import { TextField } from '@mui/material';

const TextAreaComponent = ({ label, register, error }) => (
  <TextField
    label={label}
    multiline
    sx={{
      width: '100%',
    }}
    rows={4}
    {...register}
    error={!!error}
    helperText={error && 'This field is required'}
    placeholder='write Something...'
  />
);

export default TextAreaComponent;
