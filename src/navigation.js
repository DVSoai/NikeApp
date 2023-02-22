import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import ProductScreen from "./screens/ProductScreen";
import ProductDetailScreen from "./screens/ProductDetailsScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import { selectNumberOfItems } from "./store/cartSlice";

const navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("ShoppingCart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="black" />
                <Text style={{ marginLeft: 5 }}>{numberOfItems}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
