export const getFABStyles = (theme, type = 'primary') => {
  let fabStyles;

  switch (type) {
    case 'primary':
      fabStyles = {
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      };
      break;
    case 'secondary':
      fabStyles = {
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
        },
      };
      break;
    // more cases eventually 
    default:
      fabStyles = {
        backgroundColor: theme.palette.grey[500],
        '&:hover': {
          backgroundColor: theme.palette.grey[700],
        },
      };
      break;
  }

  return {
    fab: fabStyles,
  };
};
