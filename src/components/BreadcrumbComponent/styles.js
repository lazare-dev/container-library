export const getBreadcrumbStyles = (theme, type = 'primary') => {
  let linkColor, separatorColor, linkHoverColor;

  switch (type) {
    case 'primary':
      linkColor = theme.palette.primary.main;
      separatorColor = theme.palette.grey[500];
      linkHoverColor = theme.palette.primary.light;
      break;
    case 'secondary':
      linkColor = theme.palette.secondary.main;
      separatorColor = theme.palette.grey[500];
      linkHoverColor = theme.palette.secondary.light;
      break;
    // more cases 
    default:
      linkColor = theme.palette.text.primary;
      separatorColor = theme.palette.grey[500];
      linkHoverColor = theme.palette.text.secondary;
      break;
  }

  return {
    linkColor,
    separatorColor,
    linkHoverColor,
    linkPadding: '5px 10px',
    linkBorderRadius: '2px',
    linkMargin: '0 5px',
    linkBorder: 'none',
    linkBackgroundColor: 'transparent',
  };
};
