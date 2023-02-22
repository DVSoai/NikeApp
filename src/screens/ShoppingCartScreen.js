import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import CartListItem from "../components/CartListItem";
import cartSlice from "../store/cartSlice";
import {
  selectSubtotal,
  selectDelivery,
  selectTotal,
} from "../store/cartSlice";

const ShoppingCartTotal = () => {
  const subtotal = useSelector(selectSubtotal);
  const delivery = useSelector(selectDelivery);
  const total = useSelector(selectTotal);
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{delivery}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total}</Text>
      </View>
    </View>
  );
};
const ShoppingCartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <SafeAreaView style={styles.container}>
      <>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <CartListItem cartItem={item} />}
          ListFooterComponent={ShoppingCartTotal}
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </Pressable>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  totalsContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: "gainsboro",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
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
export default ShoppingCartScreen;
