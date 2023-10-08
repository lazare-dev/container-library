import defaultShadows from '@mui/material/styles/shadows';

const customShadows = [
  'none', // 0
  '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)', // 1
  '0px 4px 2px -2px rgba(0,0,0,0.2)', // 2
  '0px 4px 4px -2px rgba(0,0,0,0.2)', // 3
  // ... continue your custom shadows
];

const shadows = [
  ...customShadows,
  ...defaultShadows.slice(customShadows.length),
];

export default shadows;
