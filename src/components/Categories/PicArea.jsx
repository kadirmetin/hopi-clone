import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  getPicAreaPics,
  selectPicAreaPics,
  selectPicAreaStatus,
  selectPicAreaError,
} from "./PicAreaSlice";

const PicArea = () => {
  const dispatch = useDispatch();
  const pics = useSelector(selectPicAreaPics);
  const status = useSelector(selectPicAreaStatus);
  const error = useSelector(selectPicAreaError);

  useEffect(() => {
    async function fetchPicAreaPics() {
      try {
        // @ts-ignore
        await dispatch(getPicAreaPics());
      } catch (error) {
        console.log(error);
      }
    }
    fetchPicAreaPics();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {status === "loading" && <Text>Loading...</Text>}
      {status === "failed" && <Text>{error}</Text>}
      {status === "succeeded" &&
        pics.map((item) => (
          <View key={item.id} style={styles.column}>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
          </View>
        ))}
    </View>
  );
};

export default PicArea;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 10,
  },
  column: {
    width: "48%",
    marginBottom: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 150,
    borderRadius: 10,
    resizeMode: "cover",
  },
});
