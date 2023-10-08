import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 
import { getRadioButtonStyles } from './styles'; 

const RadioButtonComponent = ({ value, handleChange, options, type = 'primary' }) => {
  const theme = useTheme(); 
  const styles = getRadioButtonStyles(theme, type); 

  return (
    <FormControl component="fieldset" style={styles.formControl}>
      <RadioGroup 
        aria-label="radio-buttons-group" 
        value={value} 
        onChange={handleChange}
        style={styles.radioGroup}
      >
        {options.map((option) => (
          <FormControlLabel 
            key={option.value} 
            value={option.value} 
            control={<Radio style={styles.radio} />} 
            label={option.label} 
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonComponent;
