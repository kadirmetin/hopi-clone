import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";

//Components
import SearchBar from "../../components/Home/SearchBar";
import OfferBar from "../../components/Home/OfferBar";
import WelcomeBar from "../../components/Home/WelcomeBar";

const HopiScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <SearchBar />
      <WelcomeBar />
      <OfferBar />
    </ScrollView>
  );
};

export default HopiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
