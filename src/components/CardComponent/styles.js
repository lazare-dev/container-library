export const getCardStyles = (theme, type = 'primary') => {
  let mainColor, darkColor;

  if (theme.palette[type]) {
    mainColor = theme.palette[type].main;
    darkColor = theme.palette[type].dark;
  }

  return {
    titleColor: mainColor || '#2196F3',
    shadowColor: darkColor ? `rgba(${darkColor}, 0.2)` : 'rgba(33, 150, 243, 0.2)',
  };
};
