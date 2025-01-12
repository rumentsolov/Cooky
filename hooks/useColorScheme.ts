import { useColorScheme as _useColorScheme } from 'react-native';

/**
 * Custom hook to get the current color scheme ('light' or 'dark').
 * Defaults to 'light' if no scheme is available.
 */
export function useColorScheme(): 'light' | 'dark' {
  return _useColorScheme() ?? 'light';
}
