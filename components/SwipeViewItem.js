//components/SwipeViewItem.js

import React from "react";
import { View, Image, useWindowDimensions, useColorScheme } from "react-native";
import slides from "@/context/slides_1";
import { Vw } from '@/components/Vw';
import { LAYOUTS } from '@/constants/Layouts';
import { getThemeColors } from "@/constants/Colors";

const SwipeViewItem = ({ item }) => {
  const theme = useColorScheme() ?? 'light';
  const isDarkMode = theme === 'dark';
  const colors = getThemeColors(isDarkMode);

  const { width } = useWindowDimensions();

  return (
    <Vw style={[LAYOUTS.swipeContainer, { width }]}>
      <Image source={item.image} style={[LAYOUTS.imageTop, { width, resizeMode: 'contain' }]} />
      <Vw style={{ flex: 0.3 }}>
        <Vw.Text
          type="title"
          align="center"
          paddingLeft={20}
          paddingRight={20}
          lightColor={colors.text} // Use lightColor for consistent styling
          darkColor={colors.text} // Ensure it matches dark mode
        >
          {item.title}
        </Vw.Text>
        <Vw.Text
          type="default"
          align="center"
          paddingLeft={20}
          paddingRight={20}
          lightColor={colors.text} // Use the same color
          darkColor={colors.text}
        >
          {item.describtion}
        </Vw.Text>
      </Vw>
    </Vw>
  );
};

export default SwipeViewItem;
