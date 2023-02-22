import React from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { productsSlice } from "../store/productsSlice";

const ProductScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id));
              navigation.navigate("ProductDetail");
            }}
            style={styles.imageContainer}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: { width: "50%", padding: 1 },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductScreen;
