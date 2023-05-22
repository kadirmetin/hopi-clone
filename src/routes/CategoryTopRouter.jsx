import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import i18n from "../lang/_i18n";

//Screens
import CategoryScreen from "../screens/Category/CategoryScreen";
import CategoryBrandsScreen from "../screens/Category/CategoryBrands/CategoryBrandsScreen";

const Tab = createMaterialTopTabNavigator();

const CategoryTopRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName="Teklifler"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarPressColor: "#000",
        tabBarIndicatorStyle: {
          borderBottomColor: "#000",
          borderBottomWidth: 3,
        },
      }}
    >
      <Tab.Screen
        name={i18n.t("categoryTopRouter.name1")}
        component={CategoryScreen}
      />
      <Tab.Screen
        name={i18n.t("categoryTopRouter.name2")}
        component={CategoryBrandsScreen}
      />
    </Tab.Navigator>
  );
};

export default CategoryTopRouter;
