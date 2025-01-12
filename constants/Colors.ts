//costant//Colors.ts

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const COLOR = {
  Gray: "#83829A",
  Gray2: "#C1C0C8",
  GreenLight: "#29B95C",
  GreenOlive: "#1B3C3D",
  blueDark: "#0D0650",
  White: "#FFFFFF",
  WhiteLight: "#FAFAFC",
  Black: "#000000",
  TintColorLight: '#0a7ea4',
  TintColorDark:  '#fff'

};

export {COLOR};

export type ThemeColors = {
  text: string;
  background: string,
  tint:  string,
  icon: string,
  tabIconDefault:  string,
  tabIconSelected: string,
  menuBackground: string,
  menuText: string,
  accent: string,
  error: string,
  success: string,
  warning: string,
  [key: string]: string; // For any additional custom colors
};

export const light: ThemeColors = {
  text: COLOR.GreenOlive,
  background: COLOR.WhiteLight,
  tint:  COLOR.TintColorLight,
  icon: COLOR.Gray2,
  tabIconDefault:  COLOR.TintColorLight,
  tabIconSelected: COLOR.TintColorLight,
  menuBackground: COLOR.GreenOlive,
  menuText: COLOR.White,
  accent: "#03DAC6",
  error: "#B00020",
  success: "#00C853",
  warning: "#FFD600",
};

export const dark: ThemeColors = {
  text: '#ECEDEE',
  background: '#151718',
  tint: COLOR.TintColorDark,
  icon: COLOR.GreenOlive,
  tabIconDefault: COLOR.TintColorDark,
  tabIconSelected: COLOR.TintColorDark,
  menuBackground: COLOR.GreenOlive,
  menuText: COLOR.White,
  accent: "#03DAC6",
  error: "#CF6679",
  success: "#00E676",
  warning: "#FFEA00",
};

// Function to switch themes dynamically
export const getThemeColors = (isDarkMode: boolean): ThemeColors =>
  isDarkMode ? dark : light;
