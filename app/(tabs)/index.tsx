import React from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';
import {Vw} from '@/components/Vw'
import { LAYOUTS } from '@/constants/Layouts'; // Import Layout constants
import { ThemeProvider } from '@/context/ThemeContext';  // Ensure correct import
import { COLOR } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <ThemeProvider> 
      <View style={styles.imageContainer}>
        <Image source={require('@/assets/images/cooky.png')} style={styles.image} />
      </View>
      <Vw>
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

        <Vw style={LAYOUTS.container}>
          <Vw.Text type = 'title' style={LAYOUTS.titleContainer}>Как работи</Vw.Text>
        </Vw>


        <Vw style={LAYOUTS.container}>
          <Image source={require('@/assets/images/menu.png')} style={styles.image} />
          <Vw.Text type = 'title' style={LAYOUTS.titleContainer}>1. Направи си меню</Vw.Text>
          <Vw.Text style={LAYOUTS.titleContainer}>
          Избери от 24 рецепти, които всяка седмица приготвяме специално за теб. Поръчките приключват всеки четвъртък в 21:00
          </Vw.Text>
        </Vw>

        <Vw style={LAYOUTS.container}>
          <Image source={require('@/assets/images/deliver.png')} style={styles.image} />
          <Vw.Text type = 'title' style={LAYOUTS.titleContainer}>2. Ние ти доставяме</Vw.Text>
          <Vw.Text style={LAYOUTS.titleContainer}>
          Доставяме до твоята врата кошница с най-висококачествените, пресни продукти, специално подредени и селектирани в пакети
          </Vw.Text>
        </Vw>          

        <Vw style={LAYOUTS.container}>
          <Image source={require('@/assets/images/account.png')} style={styles.image} />
          <Vw.Text type = 'title' style={LAYOUTS.titleContainer}>3. Ти готвиш</Vw.Text>
          <Vw.Text style={LAYOUTS.titleContainer}>
          С помощта на мобилното приложение, бързо и лесно приготвяш най-вкусните ястия, във собствения си дом, без повече планиране на седмичното меню
          </Vw.Text>
        </Vw>    

      </Vw>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 30,
    padding: 5,
    backgroundColor: COLOR.GreenOlive,
    alignItems: 'flex-start',  // Align images to the start
  },
  image: {
    width: 50,  // Set the width of the image
    height: 50,  // Set the height of the image
    marginBottom: 0,  // Space between images
    borderRadius: 0,  // Optional: to give rounded corners to images
  },
});
