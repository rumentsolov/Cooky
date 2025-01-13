// HomeScreen.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from '@/context/ThemeContext'; 
import { LAYOUTS } from '@/constants/Layouts';
import LoginForm from '@/components/LoginForm';
import SwipeView from '@/components/SwipeView';
import slides from '@/context/slides_1'; 

export default function HomeScreen() {
  return (
    <SafeAreaView style={LAYOUTS.container}>
      <ThemeProvider> 
        <LoginForm />
        <SwipeView slides={slides} />
        <SwipeView slides={slides} />
      </ThemeProvider>
    </SafeAreaView>
  );
}
