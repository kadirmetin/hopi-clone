import { Dimensions, StyleSheet, View, Text, Platform } from "react-native";
import { useEffect, useRef, useState } from "react";
import Markers from "./Markers";
import ZoomControl from "./ZoomControl";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
import MapView from "react-native-maps";

export const MapScreen = ({ route }) => {
  const { item } = route.params;
  const map = useRef(null);
  const [marker, setMarker] = useState({
    latitude: item.latitude,
    longitude: item.longitude,
  });

  const handleZoom = (zoom) => {
    map?.current?.getCamera().then((cam) => {
      if (zoom === "zoomIn") {
        cam.altitude /= 2;
      } else {
        cam.altitude *= 2;
      }
      map?.current?.animateCamera(cam);
    });
  };

  useEffect(() => {
    setMarker({
      latitude: item.latitude,
      longitude: item.longitude,
    });
  }, [route.params]);

  const LATITUDE_DELTA = 0.008;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
  return (
    <View style={styles.container}>
      <MapView
        ref={map}
        style={{ alignSelf: "stretch", height: "100%" }}
        region={{
          latitude: Number(marker.latitude),
          longitude: Number(marker.longitude),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        <Markers locations={marker} />
      </MapView>
      <View style={styles.overlay}>
        <View style={{ alignItems: "flex-end" }}>
          {Platform.OS === "ios" && <ZoomControl handleZoom={handleZoom} />}

          <View style={styles.overlay_container}>
            <Text style={styles.yerAdi}>{item.yerAdi}</Text>

            <View style={styles.icon_text_container}>
              <Entypo name="location-pin" size={26} color="black" />
              <Text style={styles.adres}>{item.adres}</Text>
            </View>

            <View style={styles.icon_text_container}>
              <FontAwesome name="phone" size={22} color="black" />
              <Text style={styles.telefon}>{item.telefon}</Text>
            </View>

            <View style={styles.icon_text_container}>
              <AntDesign name="clockcircleo" size={20} color="black" />
              <Text style={styles.calismaSaatleri}>{item.calismaSaatleri}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 20,
    // right: 1.5,
    width: width,
  },
  overlay_container: {
    backgroundColor: "#3FBFF5",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  icon_text_container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    columnGap: 5,
  },
  yerAdi: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  adres: {
    fontSize: 14,
    color: "white",
    width: "90%",
  },
  telefon: {
    fontSize: 14,
    color: "white",
  },
  calismaSaatleri: {
    fontSize: 14,
    color: "white",
  },
});
