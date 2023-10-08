export const getTextFieldStyles = (theme, type = 'primary') => {
  let textFieldStyles;

  switch (type) {
    case 'primary':
      textFieldStyles = {
        label: {
          color: theme.palette.primary.main,
        },
        input: {
          borderColor: theme.palette.primary.main,
          borderWidth: '2px',
        },
      };
      break;

    case 'secondary':
      textFieldStyles = {
        label: {
          color: theme.palette.secondary.main,
        },
        input: {
          borderColor: theme.palette.secondary.main,
          borderWidth: '2px',
        },
      };
      break;

    default:
      textFieldStyles = {
        label: {
          color: theme.palette.text.primary,
        },
        input: {
          borderColor: theme.palette.grey[500],
          borderWidth: '2px',
        },
      };
      break;
  }

  return textFieldStyles;
};
