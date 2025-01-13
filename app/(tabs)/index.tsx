import React from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';
import { MainView } from '@/components/MainView';  // Adjust the path if needed
import { ThemeProvider } from '@/context/ThemeContext';  // Ensure correct import
import { COLOR } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <ThemeProvider> 
      <View style={styles.imageContainer}>
        <Image source={require('@/assets/images/cooky.png')} style={styles.image} />
      </View>

      <MainView title="Как работи" >
        <View style={styles.imageContainer}>
          <Image source={require('@/assets/images/menu.png')} style={styles.image} />
        </View>
        <MainView.Text type="default">
        1. Направи си меню
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

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: COLOR.GreenOlive,
    alignItems: 'flex-start',  // Align images to the start
  },
  image: {
    width: 50,  // Set the width of the image
    height: 50,  // Set the height of the image
    marginBottom: 0,  // Space between images
    borderRadius: 8,  // Optional: to give rounded corners to images
  },
});
