// Use this to make your component theme-aware
export const getSwitchStyles = (theme, type = 'primary') => {
  let switchStyles;

  switch (type) {
    case 'primary':
      switchStyles = {
        switch: {
          '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.primary.main,
          },
          '& .MuiSwitch-track': {
            backgroundColor: theme.palette.grey[300],
          },
        },
        label: {
          color: theme.palette.text.primary,
        },
      };
      break;
    case 'secondary':
      switchStyles = {
        switch: {
          '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.secondary.main,
          },
          '& .MuiSwitch-track': {
            backgroundColor: theme.palette.grey[300],
          },
        },
        label: {
          color: theme.palette.text.primary,
        },
      };
      break;
    default:
      switchStyles = {
        switch: {
          '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.grey[500],
          },
          '& .MuiSwitch-track': {
            backgroundColor: theme.palette.grey[300],
          },
        },
        label: {
          color: theme.palette.text.primary,
        },
      };
      break;
  }

  return switchStyles;
};
