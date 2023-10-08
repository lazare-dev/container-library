import React from 'react';
import { Button, useTheme } from '@mui/material';
import { getButtonStyles } from './styles';


function ButtonComponent({ label, type = 'primary' }) {
    const theme = useTheme();
    const buttonStyles = getButtonStyles(theme, type);

    const handleClick = () => {
        alert(`You've clicked the ${label} button`);
    };

    return (
        <Button 
            style={buttonStyles.root} 
            onClick={handleClick}
            // Using sx prop for hover styles...prob need to incorporate into styles.js
            sx={{
                '&:hover': buttonStyles.hover
            }}
        >
            {label}
        </Button>
    );
}

export default ButtonComponent;
