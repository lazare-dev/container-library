// src/components/ButtonComponent/styles.js
export const getButtonStyles = (theme, type = 'primary') => {
    let buttonStyles;
  
    switch (type) {
      case 'primary':
        buttonStyles = createButtonStyles(theme, theme.palette.primary);
        break;
      case 'secondary':
        buttonStyles = createButtonStyles(theme, theme.palette.secondary);
        break;
      case 'error':
        buttonStyles = createButtonStyles(theme, theme.palette.error);
        break;
      case 'info':
        buttonStyles = createButtonStyles(theme, theme.palette.info);
        break;
      case 'success':
        buttonStyles = createButtonStyles(theme, theme.palette.success);
        break;
      case 'warning':
        buttonStyles = createButtonStyles(theme, theme.palette.warning);
        break;
      default:
        buttonStyles = {
          root: {
            backgroundColor: theme.palette.grey[300], // default background
            color: theme.palette.getContrastText(theme.palette.grey[300]), // defaukt text color
          },
          hover: {
            backgroundColor: theme.palette.grey[500], // default hover background
          },
        };
        break;
    }
  
    return buttonStyles;
  };
  
  const createButtonStyles = (theme, palette) => {
    return {
      root: {
        backgroundColor: palette.main,
        color: palette.contrastText,
      },
      hover: {
        backgroundColor: palette.dark,
      },
    };
  };
  