import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet } from "react-native";
import i18n from "../lang/_i18n";

//Icons
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

//Screens
import HomeTopRouter from "../routes/HomeTopRouter";
import CategoryTopRouter from "../routes/CategoryTopRouter";
import MyQRCode from "../screens/MyQRCode";
import WalletTopRouter from "../routes/WalletTopRouter";
import MyAccount from "../screens/MyAccount";
import { MapScreen } from "../screens/Map/MapScreen";

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name={i18n.t("router.name1")}
        component={HomeTopRouter}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name={"home"}
                size={24}
                color={focused ? "black" : "#ACACAC"}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={i18n.t("router.name2")}
        component={CategoryTopRouter}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="category"
                size={24}
                color={focused ? "black" : "#ACACAC"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={i18n.t("router.name3")}
        component={MyQRCode}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="qr-code"
                size={24}
                color={focused ? "black" : "#ACACAC"}
              />
            );
          },
          headerShown: true,
          headerLeft: () => (
            <Octicons
              name="question"
              size={18}
              color="black"
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={i18n.t("router.name4")}
        component={WalletTopRouter}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="wallet"
                size={24}
                color={focused ? "black" : "#ACACAC"}
              />
            );
          },
          headerShown: true,
          headerLeft: () => (
            <Octicons
              name="question"
              size={18}
              color="black"
              style={styles.icon}
            />
          ),
          headerRight: () => (
            <Text style={styles.headerText}>{i18n.t("router.headerText")}</Text>
          ),
        }}
      />
      <Tab.Screen
        name={i18n.t("router.name5")}
        component={MyAccount}
        options={{
          tabBarBadge: 7,
          tabBarBadgeStyle: {
            maxHeight: 10,
            maxWidth: 10,
            position: "absolute",
            left: 10,
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="person"
                size={24}
                color={focused ? "black" : "#ACACAC"}
              />
            );
          },
          headerShown: true,
          headerRight: () => (
            <Ionicons
              name="md-settings-sharp"
              size={24}
              color="#404042"
              style={styles.icon2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
  icon2: {
    marginRight: 10,
  },
  headerText: {
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 14,
    color: "#797979",
  },
});
