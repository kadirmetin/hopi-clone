import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import i18n from "../../lang/_i18n";

const LoveCategories = () => {
  const win = Dimensions.get("window");
  const ratio2 = win.width / 578;

  return (
    <View style={styles.categories}>
      <View>
        <Text style={styles.categoriesText}>
          {i18n.t("loveCategories.categoriesLove")}
        </Text>
      </View>
      <View style={styles.categoriesList}>
        <View style={styles.categoriesListLeft}>
          <Image
            style={{
              width: "100%",
              height: ratio2 * 265,
              borderRadius: 10,
              resizeMode: "cover",
            }}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/hopi-clone-81270.appspot.com/o/loveCategoriesCollection%2Fkategori-giyim.png?alt=media&token=eadcc4cf-0cda-413d-9bd8-66b89ee17403",
            }}
          />
        </View>
        <View style={styles.categoriesListRight}>
          <Image
            style={{
              width: "100%",
              height: ratio2 * 125,
              borderRadius: 10,
              resizeMode: "cover",
            }}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/hopi-clone-81270.appspot.com/o/loveCategoriesCollection%2Fkategori-ayakkabi.png?alt=media&token=ac361db0-631e-4b61-909b-98d917966610",
            }}
          />
          <Image
            style={{
              width: "100%",
              height: ratio2 * 125,
              borderRadius: 10,
              marginTop: 10,
              resizeMode: "center",
            }}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/hopi-clone-81270.appspot.com/o/loveCategoriesCollection%2Fkategori-spor.png?alt=media&token=a2b0a324-e761-4094-bfcd-51fec075bfcf",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default LoveCategories;

const styles = StyleSheet.create({
  categories: {
    backgroundColor: "#FFF",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  categoriesText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  categoriesList: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoriesListLeft: {
    flex: 2,
    marginRight: 10,
  },
  categoriesListRight: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
