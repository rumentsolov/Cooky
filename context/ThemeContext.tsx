import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native'; 
import { getThemeColors } from '@/constants/Colors'; 
import { ThemeColors } from '@/constants/Colors'; 

type ThemeContextType = {
  theme: 'light' | 'dark'; 
  colors: ThemeColors;
  toggleTheme: () => void; // Function to toggle theme
};

type ThemeProviderProps = {
  children: ReactNode; 
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemTheme = useColorScheme() ?? 'light'; // Default theme based on system setting
  const [theme, setTheme] = useState<'light' | 'dark'>(systemTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const colors = getThemeColors(theme === 'dark');

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
