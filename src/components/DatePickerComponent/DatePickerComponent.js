import React from 'react';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '@mui/material/styles'; // Import useTheme
import { getDatePickerStyles } from './styles'; // Import the styles

function DatePickerComponent({ label, value, handleChange, type = 'primary' }) {
  const theme = useTheme(); 
  const styles = getDatePickerStyles(theme, type); 

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField 
            {...params} 
            sx={{
              width: styles.textField.width,
              borderColor: styles.textField.borderColor,
              borderWidth: styles.textField.borderWidth,
            }} 
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default DatePickerComponent;
