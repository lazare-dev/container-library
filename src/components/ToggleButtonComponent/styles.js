// src/components/ToggleButtonComponent/styles.js
export const getToggleButtonStyles = (theme, type = 'primary') => {
  let buttonStyles;

  switch (type) {
    case 'primary':
      buttonStyles = {
        button: {
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
        group: {
          borderColor: theme.palette.grey[400],
        },
      };
      break;
    case 'secondary':
      buttonStyles = {
        button: {
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
        },
        group: {
          borderColor: theme.palette.grey[400],
        },
      };
      break;
    default:
      buttonStyles = {
        button: {
          borderColor: theme.palette.grey[500],
          color: theme.palette.text.primary,
        },
        group: {
          borderColor: theme.palette.grey[400],
        },
      };
      break;
  }

  return buttonStyles;
};
