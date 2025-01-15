// components/SwipeView.tsx

import React, { useState, useEffect, useRef } from "react";
import { FlatList, Animated, useWindowDimensions, TouchableOpacity } from "react-native";
import { Vw } from "@/components/Vw";
import { LAYOUTS } from "@/constants/Layouts";
import SwipeViewItem from "@/components/SwipeViewItem";3
import { useTheme } from '@/context/ThemeContext'; 
import Paginator from "@/components/Paginator";
import AntDesign from "@expo/vector-icons/AntDesign"; // Import AntDesign icons
import applyShadow from '@/utils/Shadows';


export default function SwipeView({ slides }) {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const [maxDescriptionHeight, setMaxDescriptionHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // To track the current index

  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  useEffect(() => {
    // Calculate the maximum height of descriptions of the slides
    const calculateMaxHeight = async () => {
      const heights = slides.map(
        (slide) => measureTextHeight(slide.describtion, { fontSize: 24 }, width) 
      );

      const maxHeight = Math.max(...(await Promise.all(heights)));
      setMaxDescriptionHeight(maxHeight);
    };

    calculateMaxHeight();
  }, [slides, width]);

  // Navigate to the previous slide
  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      slideRef.current.scrollToIndex({ index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Navigate to the next slide
  const goToNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Vw style={[LAYOUTS.container, { alignItems: "center", justifyContent: "center" }]}>
      <Vw style={{ flex: slides.length }}>
        <FlatList
          ref={slideRef}
          data={slides}
          renderItem={({ item }) => (
            <SwipeViewItem item={item} maxDescriptionHeight={maxDescriptionHeight} />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={({ viewableItems }) => {
            setCurrentIndex(viewableItems[0]?.index);
          }}
        />
      </Vw>

      {/* Pagination Control */}
      <Vw style={{ alignItems: "center", justifyContent: "center" }}>
        <Paginator data={slides} scrollX={scrollX} />
      </Vw>

      {/* Left Arrow */}
      <TouchableOpacity
        style={[LAYOUTS.arrowContainerLeft, { left: 20 }, applyShadow()]}
        onPress={goToPrevSlide}
      >
        <AntDesign name="left" size={32} color={ colors.button}/>
      </TouchableOpacity>

      {/* Right Arrow */}
      <TouchableOpacity
        style={[LAYOUTS.arrowContainerRight, { right: 20 }, applyShadow()]}
        onPress={goToNextSlide}
      >
        <AntDesign name="right" size={32}  color={ colors.button} />
      </TouchableOpacity>
    </Vw>
  );
}

async function measureTextHeight(text, style, width) {
  return new Promise((resolve) => {
    const fakeText = (
      <Text
        style={[style, { position: "absolute", opacity: 0, width }]}
        numberOfLines={0}
        onLayout={({ nativeEvent: { layout } }) => resolve(layout.height)}
      >
        {text}
      </Text>
    );

    resolve(fakeText?.height || 0);
  });
}
