import React from "react";
import {View , Text , StyleSheet , FlatList , Animated} from "react-native";
import slides from "@/context/slides_1"

import { useState, useRef } from "react";

import {Vw} from '@/components/Vw'
import { LAYOUTS } from '@/constants/Layouts'; // Import Layout constants
import SwipeViewItem from "@/components/SwipeViewItem";

export default SwipeView = () => {

    const [currentIndex,setCurrentIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;
    const slideRef = useRef(null);
    const viewConfig = useRef({
        viewAreaCoveragePercentThreshold: 10,  // 10% visibility of the area
        //itemVisiblePercentThreshold: 50,       // 50% of the item should be visible
    }).current;
    const viewableItemsChanged = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index)
    }).current;
    const itemsCount = slides.itemsCount;

    return (

       <Vw style={LAYOUTS.swipeContainer}>
            <Vw styles={{flex:itemsCount}}>
                <FlatList 
                data={slides} 
                renderItem = {({item}) => <SwipeViewItem item={item}/>} 
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
                keyExtractor={(item) =>item.id}
                onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
                    useNativeDriver:false
                })}
                scrollEventThrottle={32}
                viewabilityConfig={viewConfig}
                onViewableItemsChanged={viewableItemsChanged}
                ref={slideRef}
                />
            </Vw>
        </Vw>

    );

}
