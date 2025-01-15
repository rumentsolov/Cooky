import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Vw } from "@/components/Vw"; // Assuming this is a custom component for wrapping views
import Entypo from '@expo/vector-icons/Entypo';
import { LAYOUTS } from '@/constants/Layouts';
import Btn from '@/components/Button'; 
import { useTheme } from '@/context/ThemeContext';


const Basket = () => {

  const { colors } = useTheme();

  const [basketDishes, setBasketDishes] = useState([
    { id: '1', dishName: 'Dish 1', qty: 1 },
    { id: '2', dishName: 'Dish 2', qty: 2 },
    { id: '3', dishName: 'Dish 3', qty: 3 },
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000); // Simulate refreshing data
  };

  const handleIncreaseQty = (id: string) => {
    setBasketDishes((prev) =>
      prev.map((dish) =>
        dish.id === id ? { ...dish, qty: dish.qty + 1 } : dish
      )
    );
  };

  const handleDecreaseQty = (id: string) => {
    setBasketDishes((prev) =>
      prev.map((dish) =>
        dish.id === id && dish.qty > 1 ? { ...dish, qty: dish.qty - 1 } : dish
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setBasketDishes((prev) => prev.filter((dish) => dish.id !== id));
  };

  const handleClearBasket = () => {
    setBasketDishes([]);
  };

  const renderItem = ({ item }: { item: typeof basketDishes[0] }) => (
    <View style={LAYOUTS.itemContainerRow}>
      <Text style={LAYOUTS.dishNameFl2}>{item.dishName}</Text>

      <View style={LAYOUTS.qtyContainer}>
        <TouchableOpacity
          style={LAYOUTS.arrowButton}
          onPress={() => handleDecreaseQty(item.id)}
        >
          <Entypo name="squared-minus" size={24} color="#29B95C" />
        </TouchableOpacity>


        <Btn
          title="Вход / Регистрация"
          icon={<Entypo name="squared-minus" size={24} color="#29B95C" />} 
          onPress={() => handleDecreaseQty(item.id)}
          style={{ maxWidth: 350 }}
          alignment="flex-end"
          buttonColor={"#29B95C"}
          />

        <Text style={LAYOUTS.qty}>{item.qty}</Text>

        <TouchableOpacity
          style={LAYOUTS.arrowButton}
          onPress={() => handleIncreaseQty(item.id)}
        >
          <Entypo name="squared-plus" size={24} color="#29B95C" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={LAYOUTS.iconButton}>
          <Entypo name="trash" size={24} color="#29B95C" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={LAYOUTS.safeAreaContainer}>
      <FlatList
        data={basketDishes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={<Text style={LAYOUTS.title}>Кошница</Text>}
        contentContainerStyle={LAYOUTS.flatListContent}
      />
      <View style={LAYOUTS.clearButtonContainer}>
        <TouchableOpacity onPress={handleClearBasket} style={LAYOUTS.clearButtonStyle}>
          <Text style={LAYOUTS.clearButtonText}>Изчисти</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Basket;
