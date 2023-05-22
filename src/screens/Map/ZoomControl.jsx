import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ZoomControl = ({ handleZoom }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleZoom("zoomIn")}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleZoom("zoomOut")}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ZoomControl;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
  },
});
