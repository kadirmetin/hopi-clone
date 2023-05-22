import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import MyWallet from "../screens/Wallet/MyWallet";
import Balance from "../screens/Wallet/Balance";
import Cards from "../screens/Wallet/Cards";
import i18n from "../lang/_i18n";

const Tab = createMaterialTopTabNavigator();

const WalletTopRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName="Paracık Bakiye"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarIndicatorStyle: {
          borderBottomColor: "#000",
          borderBottomWidth: 3,
        },
      }}
    >
      <Tab.Screen name={i18n.t("walletTopRouter.name1")} component={MyWallet} />
      <Tab.Screen name={i18n.t("walletTopRouter.name2")} component={Balance} />
      <Tab.Screen name={i18n.t("walletTopRouter.name3")} component={Cards} />
    </Tab.Navigator>
  );
};

export default WalletTopRouter;
