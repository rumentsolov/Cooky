import React from 'react';
import { SafeAreaView, Text, View, Image, Button, StyleSheet } from 'react-native';
import { ThemeProvider } from '@/context/ThemeContext'; // Assuming you're using a theme provider
import { LAYOUTS } from '@/constants/Layouts';

const DishDetail = ({ route, navigation }: any) => {
  const { dish } = route.params; // Assuming `dish` is passed as a route param

  const handleAddToBasket = () => {
    // Add to basket logic
    console.log('Dish added to basket', dish);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <View style={styles.container}>
          <Image
            source={{ uri: dish.picture }}
            style={styles.image}
          />
          
          <Text style={styles.dishName}>{dish.name}</Text>
          
          <Text style={styles.description}>{dish.description}</Text>

          <Text style={styles.price}>Price: ${dish.price.toFixed(2)}</Text>

          <Button
            title="Add to Basket"
            onPress={handleAddToBasket}
            color="dodgerblue"
            style={styles.addButton}
          />
        </View>
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  dishName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  addButton: {
    marginTop: 20,
    width: '100%',
  },
});

export default DishDetail;
