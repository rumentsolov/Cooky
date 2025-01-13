// components/SwipeView.tsx
import React, { useState, useRef } from 'react';
import { View, FlatList, Animated } from 'react-native';
import { Vw } from '@/components/Vw';
import { LAYOUTS } from '@/constants/Layouts'; // Import Layout constants
import SwipeViewItem from '@/components/SwipeViewItem'; // Assuming this is the item component
import Paginator from '@/components/Paginator'

export default function SwipeView({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 10,  // 10% visibility of the area
  }).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <Vw alignItems="center" justifyContent="center">
      <Vw styles={{ flex: slides.length }}>
        <FlatList
          data={slides} // Pass slides dynamically here
          renderItem={({ item }) => <SwipeViewItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          onViewableItemsChanged={viewableItemsChanged}
          ref={slideRef}
        />
      </Vw>
      <Vw alignItems="center" justifyContent="center">
        <Paginator data={slides}/>
      </Vw>
      
    </Vw>
  );
}
