import React, { useEffect } from "react";
import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  getWelcomeScreens,
  selectWelcomeError,
  selectWelcomeScreens,
  selectWelcomeStatus,
} from "./WelcomeSlice";
import i18n from "../lang/_i18n";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const screens = useSelector(selectWelcomeScreens);
  const status = useSelector(selectWelcomeStatus);
  const error = useSelector(selectWelcomeError);

  const handlePress = () => {
    // @ts-ignore
    navigation.navigate("App");
  };

  useEffect(() => {
    async function fetchWelcomeScreens() {
      try {
        // @ts-ignore
        await dispatch(getWelcomeScreens());
      } catch (error) {
        // handle error
      }
    }
    fetchWelcomeScreens();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeTop}>
        <Text style={styles.topText}>{i18n.t("welcome.topText")}</Text>
        <Text style={styles.topText2}>{i18n.t("welcome.topText2")}</Text>
      </View>
      <View style={styles.cartArea}>
        {status === "loading" && <Text>Loading...</Text>}
        {status === "failed" && <Text>{error}</Text>}
        {status === "succeeded" &&
          screens.map((item, index) => (
            <Pressable style={styles.cart} onPress={handlePress} key={index}>
              <View style={styles.cartLeft}>
                <Image
                  style={{
                    height: 50,
                    width: 75,
                    resizeMode: "contain",
                  }}
                  source={{ uri: item.icon }}
                />
                <Text style={styles.cartText}>{item.text}</Text>
                <Text style={styles.cartText}>{item.text2}</Text>
              </View>
              <View style={styles.cartRight}>
                <Image
                  style={{
                    height: 120,
                    width: 160.5,
                    resizeMode: "contain",
                  }}
                  source={{ uri: item.screenshot }}
                />
                <AntDesign
                  name="arrowright"
                  style={{ fontSize: 18, color: "gray" }}
                />
              </View>
            </Pressable>
          ))}
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeTop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  topText: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#192636",
  },
  topText2: {
    fontWeight: "300",
    fontSize: 18,
  },
  cartArea: {
    flex: 2,
  },
  cart: {
    flex: 1,
    width: "90%",
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cartLeft: {
    flex: 1,
  },
  cartRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartText: {
    color: "#5F5F5F",
    fontSize: 12,
    fontWeight: "bold",
  },
});
