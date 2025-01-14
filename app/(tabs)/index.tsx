// HomeScreen.tsx
import React from 'react';
import { SafeAreaView  } from 'react-native';
import { ThemeProvider } from '@/context/ThemeContext'; 
import { LAYOUTS } from '@/constants/Layouts';
import LoginForm from '@/components/LoginForm';
import SwipeView from '@/components/SwipeView';
import slides from '@/context/slides_1'; 
import { Vw } from '@/components/Vw';

//By some reason at IOS doesn scroll fully down without <Vw style={[LAYOUTS.container, { paddingTop:50 } ]}/> 

export default function HomeScreen() {
  return (
    <SafeAreaView style={LAYOUTS.container}>
      <ThemeProvider> 
        <Vw.Scrollable style={[LAYOUTS.scrollContent, { paddingTop: 10 }, { paddingBottom: 40 }]}>
            <LoginForm />
            <SwipeView slides={slides} />
            <Vw style={[LAYOUTS.container, { paddingTop:50 } ]}/> 
        </Vw.Scrollable>
      </ThemeProvider>
    </SafeAreaView>
  );
}
