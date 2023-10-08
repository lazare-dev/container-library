import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { getIconButtonStyles } from './styles'; 

const IconButtonComponent = ({ icon, type = 'primary', onClick, ...rest }) => {
  const theme = useTheme(); 
  const styles = getIconButtonStyles(theme, type); 
  
  return (
    <IconButton 
      style={styles.iconButton}
      onClick={onClick} 
      {...rest}
    >
      {icon}
    </IconButton>
  );
};

export default IconButtonComponent;
