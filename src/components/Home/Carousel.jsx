import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import i18n from "../../lang/_i18n";
import { useDispatch, useSelector } from "react-redux";
import {
  getCarouselOffers,
  selectCarouselPics,
  selectCarouselStatus,
  selectCarouselError,
} from "./CarouselSlice";

const MyOffersSlider = () => {
  const win = Dimensions.get("window");
  const ratio = win.width / 450;
  const dispatch = useDispatch();
  const pics = useSelector(selectCarouselPics);
  const status = useSelector(selectCarouselStatus);
  const error = useSelector(selectCarouselError);

  useEffect(() => {
    async function fetchCarouselOffers() {
      try {
        // @ts-ignore
        await dispatch(getCarouselOffers());
      } catch (error) {
        console.log(error);
      }
    }
    fetchCarouselOffers();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.teklifTop}>
        <Text style={styles.teklifText}>{i18n.t("offerBar.offer")}</Text>
        <Text style={styles.teklifSayac}>1/10</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollArea}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        {status === "loading" && <Text>Loading...</Text>}
        {status === "failed" && <Text>{error}</Text>}
        {status === "succeeded" &&
          pics.map((item, index) => (
            <View style={styles.card} key={index}>
              <Image
                style={{
                  width: 350,
                  height: ratio * 250,
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}
                source={{ uri: item.imageUrl }}
                resizeMode="cover"
              />
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
  },
  teklifTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  teklifText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  teklifSayac: {
    fontWeight: "bold",
    backgroundColor: "#DFDFDF",
    fontSize: 12,
    borderRadius: 6,
    alignItems: "center",
    padding: 6,
  },
  scrollArea: {
    paddingVertical: 10,
  },
  card: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
