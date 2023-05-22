import * as React from "react";
import { StyleSheet, TextInput, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Icons
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import i18n from "../../lang/_i18n";

const SearchBar = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // @ts-ignore
    navigation.navigate("Kategoriler" && "Categories");
  };

  return (
    <Pressable onPress={() => handlePress()} style={styles.container}>
      <Pressable onPress={() => handlePress()} style={styles.searchArea}>
        <EvilIcons
          name="search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
        <View pointerEvents="none">
          <TextInput
            placeholder={i18n.t("search.input")}
            style={styles.input}
          />
        </View>
      </Pressable>
      <FontAwesome name="camera" size={24} style={styles.cameraIcon} />
    </Pressable>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  searchArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderWidth: 1,
    borderColor: "#DADADA",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#F3F3F3",
    color: "#424242",
  },
  cameraIcon: {
    paddingLeft: 10,
    color: "#05ADF2",
  },
});
