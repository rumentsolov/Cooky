/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const COLOR = {
  Gray: "#83829A",
  Gray2: "#C1C0C8",
  GreenLight: "#29B95C",
  GreenOlive: "#1B3C3D",
  lueDark: "#0D0650",
  White: "#FFFFFF",
  WhiteLight: "#FAFAFC",
  Black: "#000000",
  TintColorLight: '#0a7ea4',
  TintColorDark:  '#fff'

};

export const Colors = {
  light: {
    text: COLOR.GreenOlive,
    background: COLOR.WhiteLight,
    tint:  COLOR.TintColorLight,
    icon: COLOR.GreenOlive,
    tabIconDefault:  COLOR.TintColorLight,
    tabIconSelected: COLOR.TintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: COLOR.TintColorDark,
    icon: COLOR.GreenOlive,
    tabIconDefault: COLOR.TintColorDark,
    tabIconSelected: COLOR.TintColorDark,
  },
};
