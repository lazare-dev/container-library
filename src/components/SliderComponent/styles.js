export const getSliderStyles = (theme, type = 'primary') => {
    let sliderStyles;
  
    switch (type) {
      case 'primary':
        sliderStyles = {
          label: {
            color: theme.palette.primary.main,
            fontSize: '12px',
            margin: '0',
            marginBottom: '8px',
          },
          thumb: {
            color: theme.palette.primary.main,
          },
          rail: {
            backgroundColor: `rgba(${theme.palette.primary.main}, 0.5)`,
          },
        };
        break;
      case 'secondary':
        sliderStyles = {
          label: {
            color: theme.palette.secondary.main,
            fontSize: '12px',
            margin: '0',
            marginBottom: '8px',
          },
          thumb: {
            color: theme.palette.secondary.main,
          },
          rail: {
            backgroundColor: `rgba(${theme.palette.secondary.main}, 0.5)`,
          },
        };
        break;
      default:
        sliderStyles = {
          label: {
            color: theme.palette.text.primary,
            fontSize: '12px',
            margin: '0',
            marginBottom: '8px',
          },
          thumb: {
            color: theme.palette.text.primary,
          },
          rail: {
            backgroundColor: `rgba(${theme.palette.text.primary}, 0.5)`,
          },
        };
        break;
    }
  
    return sliderStyles;
  };
  