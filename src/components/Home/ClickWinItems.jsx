import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getClickWinPics,
  selectClickWinPics,
  selectClickWinStatus,
  selectClickWinError,
} from "./ClickWinItemsSlice";
import i18n from "../../lang/_i18n";

const ClickWinItems = () => {
  const dispatch = useDispatch();
  const pics = useSelector(selectClickWinPics);
  const status = useSelector(selectClickWinStatus);
  const error = useSelector(selectClickWinError);

  useEffect(() => {
    async function fetchClickWinPics() {
      try {
        // @ts-ignore
        await dispatch(getClickWinPics());
      } catch (error) {
        // handle error
      }
    }
    fetchClickWinPics();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>{i18n.t("clickWinItems.clickWin")}</Text>
        <View style={styles.topRight}>
          <Text>{i18n.t("clickWinItems.seeAll")}</Text>
          <AntDesign name="right" size={12} color="black" />
        </View>
      </View>
      {status === "loading" && <Text>Loading...</Text>}
      {status === "failed" && <Text>{error}</Text>}
      {status === "succeeded" &&
        pics.map((item, index) => (
          <View style={styles.clickArea} key={index}>
            <View style={styles.leftArea}>
              <Image
                style={{
                  height: 50,
                  width: 75,
                  resizeMode: "contain",
                }}
                source={{ uri: item.imageUrl }}
              />
              <View style={styles.rightSide}>
                <Text style={styles.brandName}>{item.brandName}</Text>
                <Text>{item.description}</Text>
              </View>
            </View>
            <View style={styles.rightArea}>
              <Pressable style={styles.button}>
                <Text style={styles.text}>{i18n.t("clickWinItems.win")}</Text>
              </Pressable>
            </View>
          </View>
        ))}
    </View>
  );
};

export default ClickWinItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 10,
    padding: 10,
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  topText: { fontSize: 16, fontWeight: "bold" },
  topRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  clickArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#F1F1F1",
    borderBottomWidth: 2,
  },
  leftArea: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rightSide: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  rightArea: {
    flex: 0.5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#07A7E8",
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  brandName: {
    fontWeight: "bold",
  },
});
