//costant//Colors.ts

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const COLOR = {
  Gray: '#83829A',
  Gray2: '#C1C0C8',
  GreenLight: '#29B95C',
  GreenOlive: '#1B3C3D',
  White: "#FFFFFF",
  WhiteLight: "#FAFAFC",
  Black: "#000000",
  YellowOiled: '#FFDC7F',
  BlueLight: '#78B7D0',
  BlueDark: '#0D0650',
  BlueDark2: '#16325B',
  BlueSea: '#227B94'
};

export {COLOR};

export type ThemeColors = {
  text: string,
  background: string,

  IconDefault: string,
  IconSelected: string,

  menuBackground: string,
  menuTextItemSelected: string,
  menuTextItemNotSelected: string,

  accent: string,
  error: string,
  success: string,
  warning: string,
  [key: string]: string; // For any additional custom colors
};

export const light: ThemeColors = {
  text: COLOR.GreenOlive,
  
  background: COLOR.WhiteLight,

  IconDefault:  COLOR.GreenLight,
  IconSelected: COLOR.YellowOiled,

  menuBackground: COLOR.GreenOlive,
  menuTextItemSelected: COLOR.BlueLight,
  menuTextItemNotSelected: COLOR.WhiteLight,

  accent: COLOR.YellowOiled,
  error: COLOR.YellowOiled,
  success: COLOR.YellowOiled,
  warning: COLOR.YellowOiled,
};

export const dark: ThemeColors = {
  text: COLOR.GreenOlive,
  background: COLOR.YellowOiled,

  IconDefault:  COLOR.BlueLight,
  IconSelected: COLOR.WhiteLight,

  menuBackground: COLOR.GreenOlive,
  menuTextItemSelected: COLOR.BlueLight,
  menuTextItemNotSelected: COLOR.WhiteLight,

  accent: COLOR.YellowOiled,
  error: COLOR.YellowOiled,
  success: COLOR.YellowOiled,
  warning: COLOR.YellowOiled,
};

// Function to switch themes dynamically
export const getThemeColors = (isDarkMode: boolean): ThemeColors =>
  isDarkMode ? dark : light;
