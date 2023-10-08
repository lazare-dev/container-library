import React from 'react';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles'; 
import { getTextFieldStyles } from './styles'; 

const TextFieldComponent = ({ label, variant = 'outlined', type = 'primary', ...rest }) => {
  const theme = useTheme(); 
  const styles = getTextFieldStyles(theme, type); 
  return (
    <TextField
      label={label}
      variant={variant}
      InputLabelProps={{
        sx: { ...styles.label }, 
      }}
      InputProps={{
        sx: {
          borderColor: styles.input.borderColor,
          borderWidth: styles.input.borderWidth,
          borderRadius: '4px',
        }, 
      }}
      {...rest}
    />
  );
};

export default TextFieldComponent;
