// hooks/useThemeColor.ts
import { useColorScheme } from 'react-native';
import { light, dark } from '@/constants/Colors';

type ThemeColors = typeof light & typeof dark;

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof ThemeColors
): string {
  const theme: 'light' | 'dark' = useColorScheme() ?? 'light';

  if (props[theme]) {
    return props[theme]!;
  }

  const color = theme === 'dark' ? dark[colorName] : light[colorName];
  if (!color) {
    console.warn(`Color '${colorName}' is not defined in the theme.`);
    return '#000'; // Default fallback color
  }

  return color;
}
