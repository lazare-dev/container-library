import React from 'react';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';
import { getFABStyles } from './styles';

const FABComponent = ({ icon, type = 'primary', onClick }) => {
  const theme = useTheme(); 
  const styles = getFABStyles(theme, type); 
  
  return (
    <Fab 
      style={styles.fab} 
      onClick={onClick}
    >
      <Icon>{icon}</Icon>
    </Fab>
  );
};

export default FABComponent;
