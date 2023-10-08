import React from 'react';
import { Slider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getSliderStyles } from './styles';

function SliderComponent({ label, type, value, handleChange }) {
  const theme = useTheme(); 
  const styles = getSliderStyles(theme, type); 

  return (
    <div style={{ width: '150px' }}>
      <Typography gutterBottom style={styles.label}>
        {label}
      </Typography>
      <Slider 
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        sx={{
          color: styles.thumb.color,
          '& .MuiSlider-rail': {
            backgroundColor: styles.rail.backgroundColor,
          },
        }}
      />
    </div>
  );
}

export default SliderComponent;
