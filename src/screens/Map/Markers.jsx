import { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";

const Markers = ({ locations }) => {
  return (
    <>
      <Marker
        key={locations.id}
        coordinate={{
          latitude: Number(locations.latitude),
          longitude: Number(locations.longitude),
        }}
      />
      <Marker
        key={locations.id}
        coordinate={{
          latitude: Number(41.07374943905393),
          longitude: Number(28.926397108782346),
        }}
      >
        <MaterialIcons name="location-history" size={48} color="dodgerblue" />
      </Marker>
    </>
  );
};

export default Markers;
