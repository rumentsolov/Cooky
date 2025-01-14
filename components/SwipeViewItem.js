//components/SwipeViewItem.js

import React, { useState, useEffect } from "react";
import { Text, Image, useWindowDimensions, useColorScheme } from "react-native";
import { Vw } from "@/components/Vw";
import { LAYOUTS } from "@/constants/Layouts";
import { getThemeColors } from "@/constants/Colors";

const SwipeViewItem = ({ item, maxDescriptionHeight }) => {
  const theme = useColorScheme() ?? "light";
  const isDarkMode = theme === "dark";
  const colors = getThemeColors(isDarkMode);

  const { width } = useWindowDimensions();
  const [contentHeight, setContentHeight] = useState(maxDescriptionHeight);

  const handleTextLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    if (height > contentHeight) {
      setContentHeight(height);
    }
  };

  return (
    <Vw style={[LAYOUTS.container, { width }]}>
      <Image
        source={item.image}
        style={[LAYOUTS.imageTop, { width, resizeMode: "contain" }]}
      />
      <Vw style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <Vw.Text
          type="title"
          align="center"
          paddingLeft={20}
          paddingRight={20}
          lightColor={colors.text}
          darkColor={colors.text}
        >
          {item.title}
        </Vw.Text>
        <Text
          onLayout={handleTextLayout}
          style={{
            opacity: 0, 
            position: "absolute",
            width: width - 40, 
            fontSize: 18,  
          }}
        >
          {item.describtion}
        </Text>
        <Vw.Text
          type="default"
          align="center"
          paddingLeft={20}
          paddingRight={20}
          lightColor={colors.text}
          darkColor={colors.text}
          numberOfLines={0}
          style={{ minHeight: contentHeight }}
        >
          {item.describtion}
        </Vw.Text>
      </Vw>
    </Vw>
  );
};

export default SwipeViewItem;
