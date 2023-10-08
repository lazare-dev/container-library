// src/components/CheckboxComponent/styles.js
export const getCheckboxStyles = (theme, type = 'primary') => {
    let checkboxStyles;
  
    switch (type) {
      case 'primary':
        checkboxStyles = {
          color: theme.palette.primary.main,
        };
        break;
      case 'secondary':
        checkboxStyles = {
          color: theme.palette.secondary.main,
        };
        break;
      // Add more cases if you have more types
      default:
        checkboxStyles = {
          color: theme.palette.text.primary,
        };
        break;
    }
  
    return {
      ...checkboxStyles,
      label: {
        fontSize: theme.typography.body1.fontSize,
        color: theme.palette.text.primary,
      },
    };
  };
  