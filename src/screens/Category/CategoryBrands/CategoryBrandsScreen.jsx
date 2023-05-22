import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrands,
  selectCategoryBrands,
  selectCategoryBrandsStatus,
  selectCategoryBrandsError,
} from "./CategoryBrandsSlice";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CategoryBrandsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const brand = useSelector(selectCategoryBrands);
  const status = useSelector(selectCategoryBrandsStatus);
  const error = useSelector(selectCategoryBrandsError);

  useEffect(() => {
    async function fetchBrands() {
      try {
        // @ts-ignore
        await dispatch(getBrands());
      } catch (error) {
        // handle error
      }
    }
    fetchBrands();
  }, [dispatch]);

  function handleNavigate(item) {
    // @ts-ignore
    navigation.navigate("Map", { item });
  }

  return (
    <View style={styles.container}>
      {status === "loading" && <Text>Loading...</Text>}
      {status === "failed" && <Text>{error}</Text>}
      {status === "succeeded" && (
        <FlatList
          data={brand}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.list}
              key={index}
              onPress={() => handleNavigate(item)}
            >
              <View style={styles.leftSide}>
                <Text style={styles.brandName}>{item.markaAdi}</Text>
                <Text style={styles.brandLocation}>{item.yerAdi}</Text>
              </View>
              <View style={styles.rightSide}>
                <Feather name="chevron-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default CategoryBrandsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "#F1F1F1",
    borderBottomWidth: 2,
  },
  leftSide: {},
  brandName: {
    fontWeight: "900",
    paddingBottom: 10,
  },
  brandLocation: {
    fontWeight: "300",
  },
  rightSide: {},
});
