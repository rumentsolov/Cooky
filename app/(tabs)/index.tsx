import React from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';
import {Vw} from '@/components/Vw'
import { LAYOUTS } from '@/constants/Layouts'; // Import Layout constants
import { ThemeProvider } from '@/context/ThemeContext';  // Ensure correct import
import { COLOR } from '@/constants/Colors';
import SwipeView from '@/components/SwipeView'
import slides from '@/context/slides_1'; // Import your slides data

export default function HomeScreen() {
  return (
    <ThemeProvider> 
      <View style={LAYOUTS.imageContainerTop}>
        <Image source={require('@/assets/images/cooky.png')} style={LAYOUTS.imageTop} />
      </View>
      <Vw style={LAYOUTS.scrollContent}>
        {/*
        <Vw.Text type="default">default ABC</Vw.Text>
        <Vw.Text type="xSmall">xSmall ABC</Vw.Text>
        <Vw.Text type="small">small ABC</Vw.Text>
        <Vw.Text type="medium">medium ABC</Vw.Text>
        <Vw.Text type="large">large ABC</Vw.Text>
        <Vw.Text type="xLarge">xLarge ABC</Vw.Text>
        <Vw.Text type="xxLarge">xxLarge ABC</Vw.Text>
        <Vw.Text type="title">title ABC</Vw.Text>
        <Vw.Text type="semiBold">semiBold ABC</Vw.Text>
        <Vw.Text type="bold">bold ABC</Vw.Text>
        <Vw.Text type="describtion">describtion ABC</Vw.Text>
        <Vw.Text type="button">button ABC</Vw.Text>
        <Vw.Text type="link" onPress={() => alert('Link clicked!')}>link</Vw.Text>
        */}
         <SwipeView slides={slides} />
 

      </Vw>
    </ThemeProvider>
  );
}