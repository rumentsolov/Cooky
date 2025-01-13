import React from "react";
import {View , StyleSheet , Image , Animated , useWindowDimensions } from "react-native";

import { LAYOUTS } from '@/constants/Layouts'; // Import Layout constants


export default Paginator = ({data , scrollX}) => {

    const { width } = useWindowDimensions();
    
    return (
        <View style={{ flexDirection: 'row', height: 64, alignItems: 'center' }}>
          {/* Checks if data is not empty before mapping */}
          {data.length > 0 ? (
            data.map((_, i) => {
              const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
    
              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: 'clamp',
              });
    
              return <Animated.View style={[LAYOUTS.dot, { width: dotWidth }]} key={i.toString()} />;
            })
          ) : (
            <View>
              <Text>Error!</Text> {/* Fallback UI */}
            </View>
          )}
        </View>
      );
    }