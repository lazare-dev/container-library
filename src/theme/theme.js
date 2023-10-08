import { createTheme } from '@mui/material/styles';
import colors from './colors';
import typography from './typography';
import grid from './grid';
import shape from './shape';
import shadows from './shadows';
import overrides from './overrides';

const theme = createTheme({
  palette: colors,
  typography: typography,
  spacing: grid.spacing,
  breakpoints: {
    values: grid.breakpoints,
  },
  shape: shape,
  shadows: shadows,
  overrides: overrides,
  // ...other theme configurations
  customGrid: {
    gutter: grid.gutter,
    rowSpacing: grid.rowSpacing,
    autoColumns: grid.autoColumns,
    container: grid.container,
    columns: grid.columns,
  },
});

export default theme;
