//app/(tabs)/menu.tsx

import React, { useState } from 'react';
import { Button, View, Image, TextInput, Alert , TouchableOpacity} from 'react-native';
import { Vw } from '@/components/Vw';
import { LAYOUTS } from '@/constants/Layouts'; 
import { ThemeProvider } from '@/context/ThemeContext'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONTSIZE } from '@/constants/Fonts';

const dishes = [
  { id: 1, name: 'Dish 1', image: require('@/assets/images/deliver.png') },
  { id: 2, name: 'Dish 2', image: require('@/assets/images/deliver.png') },
  { id: 3, name: 'Dish 3', image: require('@/assets/images/deliver.png') },
  { id: 4, name: 'Dish 4', image: require('@/assets/images/deliver.png') },
  { id: 5, name: 'Dish 5', image: require('@/assets/images/deliver.png') },
  { id: 6, name: 'Dish 6', image: require('@/assets/images/deliver.png') },
  { id: 7, name: 'Dish 7', image: require('@/assets/images/deliver.png') },
  { id: 8, name: 'Dish 8', image: require('@/assets/images/deliver.png') },
  { id: 9, name: 'Dish 9', image: require('@/assets/images/deliver.png') },
];


export default function MenuPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
           <Vw style={LAYOUTS.scrollContent} >
            <View style={LAYOUTS.gridContainer}>
              {dishes.map((dish) => (
                <TouchableOpacity
                  key={dish.id}
                  style={LAYOUTS.dishContainer}
                  onPress={() => console.log(`Dish ${dish.id} selected`)}
                >
                  <Image source={dish.image} style={LAYOUTS.dishImage} />
                  <Vw.Text type="title" align="center" paddingLeft={20} paddingRight={20}>{dish.name}</Vw.Text>
                </TouchableOpacity>
              ))}
            </View>
          </Vw>
      </ThemeProvider>
    </SafeAreaView>
  );
}

