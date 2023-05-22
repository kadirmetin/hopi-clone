import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

//Icons
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import i18n from "../../lang/_i18n";

const MyWallet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>{i18n.t("myWallet.topText")} PARACIK</Text>
      <Text style={styles.paracik}>201.50</Text>
      <View style={styles.midMenu}>
        <View style={styles.midMenuPart1}>
          <Text style={styles.textMenu}>1,50</Text>
          <Text style={styles.textMenuText}>PARACIK</Text>
          <AntDesign
            name="caretdown"
            size={14}
            color="black"
            style={styles.icon}
          />
        </View>
        <View style={styles.midMenuPart2}>
          <Text style={styles.textMenu2}>200,00</Text>
          <Text style={styles.textMenuText2}>
            {i18n.t("myWallet.gift")} PARACIK
          </Text>
        </View>
        <View style={styles.midMenuPart2}>
          <Text style={styles.textMenu2}>0,00</Text>
          <Text style={styles.textMenuText2}>
            {i18n.t("myWallet.fuel")} PARACIK
          </Text>
        </View>
      </View>
      <Text style={styles.midText}>{i18n.t("myWallet.midText")}</Text>
      <View style={styles.containerUnder}>
        <View style={styles.copyQrArea}>
          <Octicons name="paper-airplane" size={24} color="white" />
          <Text style={styles.text4}>{i18n.t("myWallet.text4")}</Text>
          <AntDesign name="right" size={16} color="white" />
        </View>
      </View>
    </View>
  );
};

export default MyWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  topText: {
    fontSize: 12,
    color: "#A5A5A5",
    marginTop: 50,
    marginBottom: 5,
  },
  paracik: {
    fontSize: 50,
    color: "#F59526",
    fontWeight: "bold",
    marginBottom: 25,
  },
  midMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  midMenuPart1: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
    borderBottomColor: "#6D6D6D",
    borderBottomWidth: 3,
  },
  midMenuPart2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 3,
  },
  textMenu: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4B4B4B",
  },
  textMenu2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#A5A5A5",
  },
  textMenuText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4B4B4B",
  },
  textMenuText2: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#A5A5A5",
  },
  icon: {
    position: "absolute",
    bottom: -17,
  },
  midText: {
    fontSize: 12,
    marginTop: 35,
    textAlign: "center",
    marginBottom: 20,
  },
  containerUnder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  copyQrArea: {
    height: 50,
    width: 350,
    borderRadius: 10,
    backgroundColor: "#F59324",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cameraIcon: {
    color: "white",
  },
  text4: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
