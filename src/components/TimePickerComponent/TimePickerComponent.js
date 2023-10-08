import React from 'react';
import { TextField, useTheme } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { getTimePickerStyles } from './styles'; 

const TimePickerComponent = ({ label, value, handleChange, type = 'primary' }) => {
  const theme = useTheme();
  const styles = getTimePickerStyles(theme, type);  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label={label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            style={styles.timePickerInput}  
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default TimePickerComponent;
