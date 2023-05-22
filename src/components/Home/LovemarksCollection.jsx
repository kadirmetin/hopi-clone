import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getLovemarks,
  selectLovemarksBrands,
} from "./LovemarksCollectionSlice";
import i18n from "../../lang/_i18n";

const LovemarksCollection = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectLovemarksBrands);

  useEffect(() => {
    async function fetchLovemarks() {
      try {
        // @ts-ignore
        await dispatch(getLovemarks());
      } catch (error) {
        // handle error
      }
    }
    fetchLovemarks();
  }, [dispatch]);

  const renderItem = ({ item, index }) => (
    <View style={styles.slider} key={index}>
      <Image style={styles.sliderImage} source={{ uri: item.imageUrl }} />
      <Text style={styles.sliderText}>{item.brandName}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>
          {i18n.t("lovemarksCollection.brandsLove")}
        </Text>
        <View style={styles.topRight}>
          <Text>{i18n.t("lovemarksCollection.seeAll")}</Text>
          <AntDesign name="right" size={12} color="black" />
        </View>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={brands}
        renderItem={renderItem}
      />
    </View>
  );
};

export default LovemarksCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topText: { fontSize: 16, fontWeight: "bold" },
  topRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    padding: 10,
  },
  sliderImage: {
    height: 100,
    width: 150,
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 10,
  },
  sliderText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#565656",
  },
});
