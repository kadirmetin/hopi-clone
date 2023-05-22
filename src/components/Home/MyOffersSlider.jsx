import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getOffers,
  selectSliderOffers,
  selectSliderStatus,
  selectSliderError,
} from "./MyOffersSliderSlice";
import i18n from "../../lang/_i18n";

const MyOffersSlider = () => {
  const win = Dimensions.get("window");
  const ratio = win.width / 450;

  const dispatch = useDispatch();
  const offers = useSelector(selectSliderOffers);
  const status = useSelector(selectSliderStatus);
  const error = useSelector(selectSliderError);

  useEffect(() => {
    async function fetchOffers() {
      try {
        // @ts-ignore
        await dispatch(getOffers());
      } catch (error) {
        // handle error
      }
    }
    fetchOffers();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>{i18n.t("myOffersSlider.myOffer")}</Text>
        <View style={styles.topRight}>
          <Text>{i18n.t("myOffersSlider.seeAll")}</Text>
          <AntDesign name="right" size={12} color="black" />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollArea}
        showsHorizontalScrollIndicator={false}
      >
        {status === "loading" && <Text>Loading...</Text>}
        {status === "failed" && <Text>{error}</Text>}
        {status === "succeeded" &&
          offers.map((item, index) => (
            <View style={styles.card} key={index}>
              <Image
                style={{
                  flex: 1,
                  width: 200,
                  height: ratio * 150,
                  borderRadius: 10,
                  resizeMode: "cover",
                }}
                source={{ uri: item.imageUrl }}
              />
              <Text style={styles.brandName}>{item.brandName}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default MyOffersSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    borderWidth: 3,
    borderColor: "#82D8FF",
    borderRadius: 5,
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#fff",
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
  scrollArea: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 10,
    width: 200,
  },
  brandName: {
    flex: 1,
    fontWeight: "bold",
    marginTop: 5,
  },
  title: {
    flex: 1,
    fontSize: 10,
  },
  description: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#2EA3D0",
  },
});
