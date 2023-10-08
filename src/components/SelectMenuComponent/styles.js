import { alpha } from '@mui/material/styles';

export const getSelectMenuStyles = (theme, type = 'primary') => {
  let selectStyles;

  switch (type) {
    case 'primary':
      selectStyles = {
        label: {
          color: theme.palette.primary.main,
        },
        formControl: {
          width: '200px',
          marginBottom: '10px',
          height: '100',
        },
        select: {
          borderColor: alpha(theme.palette.primary.main, 0.9),
          borderWidth: '2px',
        },
        menuItem: {
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
        },
      };
      break;
    case 'secondary':
      selectStyles = {
        label: {
          color: theme.palette.secondary.main,
        },
        formControl: {
          width: '200px',
          marginBottom: '10px',
        },
        select: {
          borderColor: alpha(theme.palette.secondary.main, 0.9),
          borderWidth: '2px',
        },
        menuItem: {
          backgroundColor: alpha(theme.palette.secondary.main, 0.1),
        },
      };
      break;
    // more cases
    default:
      selectStyles = {
        label: {
          color: theme.palette.text.primary,
        },
        formControl: {
          width: '200px',
          marginBottom: '10px',
        },
        select: {
          borderColor: alpha(theme.palette.text.primary, 0.9),
          borderWidth: '2px',
        },
        menuItem: {
          backgroundColor: alpha(theme.palette.text.primary, 0.1),
        },
      };
      break;
  }

  return selectStyles;
};
