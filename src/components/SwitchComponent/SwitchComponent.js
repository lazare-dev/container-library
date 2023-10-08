import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getSwitchStyles } from './styles'; 

function SwitchComponent({ label, checked, handleChange, type = 'primary' }) {
  const theme = useTheme(); 
  const styles = getSwitchStyles(theme, type); 

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          sx={styles.switch} 
        />
      }
      label={label}
      sx={{ color: styles.label.color }} 
    />
  );
}

export default SwitchComponent;
