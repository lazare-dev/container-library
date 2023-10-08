export const getDatePickerStyles = (theme, type = 'primary') => {
  let datePickerStyles;

  switch (type) {
    case 'primary':
      datePickerStyles = {
        textField: {
          width: '100%',
          borderColor: theme.palette.primary.main,
          borderWidth: '2px',
        },
      };
      break;

    case 'secondary':
      datePickerStyles = {
        textField: {
          width: '100%',
          borderColor: theme.palette.secondary.main,
          borderWidth: '2px',
        },
      };
      break;

    default:
      datePickerStyles = {
        textField: {
          width: '100%',
          borderColor: theme.palette.grey[500],
          borderWidth: '2px',
        },
      };
      break;
  }

  return datePickerStyles;
};
