//app/(tabs)/index.tsx
import React from 'react';
import { Button } from 'react-native';
import { MainView } from '@/components/MainView';  // Adjust the path if needed
import { useTheme } from '@/context/ThemeContext';  // Correct import for the theme context
import { ThemeProvider } from '@/context/ThemeContext';  // Ensure correct import

export default function HomeScreen() {
  return (
    <ThemeProvider> 
      <MainView title="Welcome" subtitle="Enjoy your journey">
        <MainView.Text type="default">
          This is a default styled text using the theme.
        </MainView.Text>
        <MainView.Text type="title">
          This is a title styled text using the theme.
        </MainView.Text>
        <MainView.Text type="link" onPress={() => alert('Link clicked!')}>
          Clickable link styled text.
        </MainView.Text>
      </MainView>
    </ThemeProvider>
  );
}
