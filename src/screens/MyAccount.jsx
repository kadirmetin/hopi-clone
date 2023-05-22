import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import i18n from "../lang/_i18n";

//Icons
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MyAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Ionicons
          name="md-person-circle-sharp"
          color="#D4D4D4"
          size={64}
          style={styles.icon}
        />
        <Text style={styles.topText}>Kadir METİN </Text>
        <Feather name="edit-3" size={20} color="black" />
      </View>
      <View style={styles.mid}>
        <View style={styles.midLeft}>
          <Ionicons
            name="notifications-sharp"
            color="black"
            style={styles.midIcon}
          />
          <Text style={styles.midText}>{i18n.t("myAccount.text1")}</Text>
        </View>
        <View style={styles.midRight}>
          <Text style={styles.midRightText}>7</Text>
          <AntDesign
            name="right"
            size={16}
            color="black"
            style={{ fontWeight: "bold" }}
          />
        </View>
      </View>
      <View style={styles.mid}>
        <View style={styles.midLeft}>
          <Entypo name="star" color="black" style={styles.midIcon} />
          <Text style={styles.midText}>{i18n.t("myAccount.text2")}</Text>
        </View>
        <View style={styles.midRight}>
          <AntDesign
            name="right"
            size={16}
            color="black"
            style={{ fontWeight: "bold" }}
          />
        </View>
      </View>
      <View style={styles.mid}>
        <View style={styles.midLeft}>
          <MaterialCommunityIcons
            name="phone-in-talk"
            color="black"
            style={styles.midIcon}
          />
          <Text style={styles.midText}>{i18n.t("myAccount.text3")}</Text>
        </View>
        <View style={styles.midRight}>
          <AntDesign
            name="right"
            size={16}
            color="black"
            style={{ fontWeight: "bold" }}
          />
        </View>
      </View>
    </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  top: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginLeft: 3,
  },
  topText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#494949",
  },
  mid: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#EFEFEF",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  midLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  midRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  midIcon: {
    fontSize: 32,
  },
  midText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "400",
  },
  midRightText: {
    backgroundColor: "#04ACF2",
    borderWidth: 1,
    borderColor: "#04ACF2",
    borderRadius: 5,
    textAlign: "center",
    color: "#fff",
    marginRight: 10,
    width: 15,
  },
});
