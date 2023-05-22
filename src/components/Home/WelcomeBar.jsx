import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import i18n from "../../lang/_i18n";
import {
  getWelcomeBarDetail,
  selectWelcomeBarDetail,
  selectWelcomeBarStatus,
  selectWelcomeBarError,
} from "./WelcomeBarSlice";

const WelcomeBar = () => {
  const dispatch = useDispatch();
  const detail = useSelector(selectWelcomeBarDetail);
  const status = useSelector(selectWelcomeBarStatus);
  const error = useSelector(selectWelcomeBarError);

  useEffect(() => {
    async function fetchWelcomeBarDetail() {
      try {
        // @ts-ignore
        await dispatch(getWelcomeBarDetail());
      } catch (error) {
        // handle error
      }
    }
    fetchWelcomeBarDetail();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.hello}>
        <Text style={{ fontSize: 24, textAlign: "left" }}>👋</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {i18n.t("welcomeBar.hello")}
        </Text>
        {status === "loading" && <Text>Loading...</Text>}
        {status === "failed" && <Text>{error}</Text>}
        {status === "succeeded" &&
          detail.map((item, index) => (
            <Text key={index} style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.name}
            </Text>
          ))}
      </View>

      <View style={styles.paracik}>
        {status === "loading" && <Text>Loading...</Text>}
        {status === "failed" && <Text>{error}</Text>}
        {status === "succeeded" &&
          detail.map((item, index) => (
            <Text
              key={index}
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#EDC33D",
                marginBottom: 5,
              }}
            >
              {item.paracik} {i18n.t("welcomeBar.clientParacik")}
            </Text>
          ))}
        <Text style={{ fontSize: 12, marginBottom: 15 }}>
          {i18n.t("welcomeBar.paracik")}
        </Text>
        <Text style={{ fontSize: 12, textDecorationLine: "underline" }}>
          {i18n.t("welcomeBar.goParacik")}
        </Text>
      </View>
    </View>
  );
};

export default WelcomeBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  hello: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
  },
  paracik: {
    flex: 2,
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
  },
});
