// components/SwipeView.tsx
import React, { useState, useRef } from 'react';
import { FlatList, Animated } from 'react-native';
import { Vw } from '@/components/Vw';
import { LAYOUTS } from '@/constants/Layouts'; 
import SwipeViewItem from '@/components/SwipeViewItem'; 
import Paginator from '@/components/Paginator'

export default function SwipeView({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 10,
  }).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <Vw style={[LAYOUTS.container, { alignItems: "center", justifyContent: "center" }]}>
      <Vw style={{ flex: slides.length }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <SwipeViewItem item={item} />}
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
          viewabilityConfig={viewConfig}
          onViewableItemsChanged={viewableItemsChanged}
          ref={slideRef}
        />
      </Vw>
      <Vw style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Paginator data={slides} scrollX={scrollX} />
      </Vw>
    </Vw>
  );
}
