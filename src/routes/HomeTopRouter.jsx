import { Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//Screens
import HopiScreen from "../screens/Home/HopiScreen";
import HopiShopScreen from "../screens/Home/HopiShopScreen";

const Tab = createMaterialTopTabNavigator();

const HomeTopRouter = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Hopi"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#AA4578",
        tabBarPressColor: "#00000000",
        tabBarIndicatorStyle: {
          borderBottomColor: "#AA4578",
          borderBottomWidth: 2,
        },
      }}
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        alignContent: "center",
      }}
    >
      <Tab.Screen
        name="Hopi"
        component={HopiScreen}
        options={{
          tabBarLabel: "Hopi",
          tabBarIcon: () => (
            <Image
              style={{ height: 24, width: 24 }}
              source={require("../../assets/hopi.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HopiShop"
        component={HopiShopScreen}
        options={{
          tabBarLabel: "Hopi Shop",
          tabBarIcon: () => (
            <Image
              style={{ height: 24, width: 48 }}
              source={require("../../assets/hopi-shop.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTopRouter;
