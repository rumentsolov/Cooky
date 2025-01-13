import React from "react";
import {View , Text , StyleSheet , Image , useWindowDimensions } from "react-native";
import slides from "@/context/slides_1"
import {Vw} from '@/components/Vw'
import { LAYOUTS } from '@/constants/Layouts'; // Import Layout constants


export default SwipeViewItem = ({item}) => {

    const { width } = useWindowDimensions();

    return (
        <Vw style={[LAYOUTS.swipeContainer, { width }]}> 
            <Image source={item.image} style={[LAYOUTS.imageTop, { width , resizeMode : 'contain' } ] }/>
            <Vw style={{flex:0.3}}>
            <Vw.Text type="title" align="center" paddingLeft={20} paddingRight={20}>{item.title}</Vw.Text>
            <Vw.Text type="default" align="center" paddingLeft={20} paddingRight={20}>{item.describtion}</Vw.Text>
            </Vw>
        </Vw>
    );

}
