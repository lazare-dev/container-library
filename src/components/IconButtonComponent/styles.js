export const getIconButtonStyles = (theme, type = 'primary') => {
  let iconButtonStyles;

  switch (type) {
    case 'primary':
      iconButtonStyles = {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.light,
        },
      };
      break;
    case 'secondary':
      iconButtonStyles = {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.light,
        },
      };
      break;
    // more cases
    default:
      iconButtonStyles = {
        color: theme.palette.text.primary,
        '&:hover': {
          backgroundColor: theme.palette.grey[300],
        },
      };
      break;
  }

  return {
    iconButton: iconButtonStyles,
  };
};
