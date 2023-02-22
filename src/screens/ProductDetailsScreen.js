import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  ScrollView,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import productsSlice from "../store/productsSlice";
import cartSlice from "../store/cartSlice";
import { addCartItem } from "../store/cartSlice";

const ProductDetailScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const addToCart = () => {
    dispatch(addCartItem({ product }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <ScrollView style={{ padding: 10 }}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>

      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 5,
  },
  price: {
    fontWeight: "500",
    fontSize: 18,
    letterSpacing: 1,
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
    fontSize: 16,
    fontWeight: "400",
  },
  button: {
    padding: 10,
    position: "absolute",
    backgroundColor: "black",
    width: "90%",
    bottom: 20,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
  },
});

export default ProductDetailScreen;
