export const getTimePickerStyles = (theme, type = 'primary') => {
  let timePickerStyles;

  switch (type) {
    case 'primary':
      timePickerStyles = {
        timePickerInput: {
          borderColor: theme.palette.primary.main,
          background: `${theme.palette.primary.light}1A`, // appending '1A' for ~10% opacity
        },
      };
      break;

    case 'secondary':
      timePickerStyles = {
        timePickerInput: {
          borderColor: theme.palette.secondary.main,
          background: `${theme.palette.secondary.light}1A`,
        },
      };
      break;

    default:
      timePickerStyles = {
        timePickerInput: {
          borderColor: theme.palette.grey[500],
          background: `${theme.palette.grey[300]}1A`,
        },
      };
      break;
  }

  return timePickerStyles;
};
