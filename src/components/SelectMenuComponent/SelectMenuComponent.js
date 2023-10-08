import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // useTheme hook
import { getSelectMenuStyles } from './styles'; 

const SelectMenuComponent = ({ label, value, handleChange, options, type = 'primary' }) => {
  const theme = useTheme(); 
  const styles = getSelectMenuStyles(theme, type); 

  return (
    <FormControl style={styles.formControl} variant="outlined">
      <InputLabel style={styles.label}>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        label={label}
        style={styles.select}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} style={styles.menuItem}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectMenuComponent;
