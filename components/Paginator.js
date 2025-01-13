import React from "react";
import {View , Text , StyleSheet , Image , useWindowDimensions } from "react-native";
import slides from "@/context/slides_1"
import {Vw} from '@/components/Vw'
import { LAYOUTS } from '@/constants/Layouts'; // Import Layout constants


export default Paginator = ({data}) => {

    return (
        <View style={{flexDirection: 'row' , height:64 , alignItems:'center'}}>
            {data.map ((_,i) => {
                return <View style={[LAYOUTS.dot , {width:10}]} key={i.toString()}/>
            })}
        </View>

    );

}
