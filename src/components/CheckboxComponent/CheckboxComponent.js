// src/components/CheckboxComponent/index.js
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@mui/material/styles';
import { getCheckboxStyles } from './styles'; 

function CheckboxComponent({ label, checked, onChange, type = 'primary' }) {
  const theme = useTheme();
  const styles = getCheckboxStyles(theme, type);  
  
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          style={{ color: styles.color }}  // styles
        />
      }
      label={label}
      style={{ fontSize: styles.label.fontSize, color: styles.label.color }}  // styles
    />
  );
}

export default CheckboxComponent;
