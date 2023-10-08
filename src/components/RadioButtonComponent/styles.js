export const getRadioButtonStyles = (theme, type = 'primary') => {
  let formControlStyles, radioGroupStyles, radioStyles;

  switch (type) {
    case 'primary':
      formControlStyles = {
        borderColor: theme.palette.primary.main,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      };
      radioGroupStyles = {
        borderColor: theme.palette.primary.main,
      };
      radioStyles = {
        borderColor: theme.palette.primary.main,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      };
      break;
    // more cases
    default:
      formControlStyles = {
        borderColor: theme.palette.grey[500],
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      };
      radioGroupStyles = {
        borderColor: theme.palette.grey[500],
      };
      radioStyles = {
        borderColor: theme.palette.grey[500],
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      };
      break;
  }

  return {
    formControl: formControlStyles,
    radioGroup: radioGroupStyles,
    radio: radioStyles,
  };
};
