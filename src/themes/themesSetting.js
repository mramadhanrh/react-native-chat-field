const themesSetting = {
  borderRadius: {
    xl: 50,
    lg: 35,
    md: 25,
    sm: 10,
    xs: 5
  }
};

const color = [
  '#f44336',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#4caf50',
  '#8bc34a',
  '#ffeb3b',
  '#ffc107',
  '#ff9800'
];

export const getThemeColor = (i = Math.floor(Math.random() * color.length)) => {
  return color[i];
};

export default themesSetting;
