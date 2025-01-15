//components/Paginator.js

import React from "react";
import {View , StyleSheet , Image , Animated , useWindowDimensions } from "react-native";
import applyShadow from '@/utils/Shadows';
import { LAYOUTS } from '@/constants/Layouts';
import { useTheme } from '@/context/ThemeContext';

export default Paginator = ({data , scrollX}) => {

    const { width } = useWindowDimensions();
    const { colors } = useTheme();

    return (
        <View style={{ flexDirection: 'row', height: 30, alignItems: 'center', paddingBottom:10 }}>
          {/* Checks if data is not empty before mapping */}
          {data.length > 0 ? (
            data.map((_, i) => {
              const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
    
              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: 'clamp',
              });
    
              return <Animated.View style={[LAYOUTS.dot, { 
                width: dotWidth,
                //backgroundColor: colors.background || '#000', // Задаване на фон
                ...applyShadow()
              }]} key={i.toString()} />;
            })
          ) : (
            <View>
              <Text>Error!</Text> {/* Fallback UI */}
            </View>
          )}
        </View>
      );
    }