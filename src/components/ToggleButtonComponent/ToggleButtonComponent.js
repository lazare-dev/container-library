// src/components/ToggleButtonComponent/ToggleButtonComponent.js
import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@mui/material/styles'; 
import { getToggleButtonStyles } from './styles';

const ToggleButtonComponent = ({ value, handleChange, options, type = 'primary' }) => {
  const theme = useTheme(); 
  const styles = getToggleButtonStyles(theme, type); 

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="toggle button group"
      style={styles.group}
    >
      {options.map((option, index) => (
        <ToggleButton
          key={index}
          value={option.value}
          aria-label={option.label}
          style={styles.button}
        >
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleButtonComponent;
