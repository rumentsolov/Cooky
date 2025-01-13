import { ThemeProvider } from '@/context/ThemeContext';  // Ensure correct import
import { Button, View, Image, StyleSheet } from 'react-native';
import { MainView } from '@/components/MainView';  // Adjust the path if needed

export default function Menu() {
  return (
    <ThemeProvider> 
      <MainView title="Как работи" >
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
