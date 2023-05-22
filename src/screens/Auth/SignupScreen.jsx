import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../services/config";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, changePassword } from "./SignupSlice";
import i18n from "../../lang/_i18n";

const SignupScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // @ts-ignore
  const email = useSelector((state) => state.signup.email);
  // @ts-ignore
  const password = useSelector((state) => state.signup.password);

  const signupUser = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePress = () => {
    // @ts-ignore
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topArea}>
        <Image
          style={{
            height: 75,
            width: 75,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/hopi-clone-81270.appspot.com/o/logo%2Fhopi.png?alt=media&token=147ed279-8775-413b-b503-4764915b7f3f",
          }}
        />
        <Text style={styles.topText}>{i18n.t("signup.topText")}</Text>
        <Text style={styles.topText2}>{i18n.t("signup.topText2")}</Text>
      </View>
      <View style={styles.midArea}>
        <TextInput
          style={styles.input}
          placeholder={i18n.t("signup.mail")}
          onChangeText={(item) => dispatch(changeEmail(item))}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder={i18n.t("signup.password")}
          onChangeText={(item) => dispatch(changePassword(item))}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => signupUser(email, password)}
        >
          <Text style={styles.buttonText}>{i18n.t("signup.button")}</Text>
        </TouchableOpacity>
        <Pressable onPress={handlePress}>
          <Text style={styles.bottomText}>{i18n.t("signup.login")}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  topArea: {
    alignItems: "center",
  },
  topText: {
    fontWeight: "900",
    fontSize: 20,
    marginTop: 25,
  },
  topText2: {
    textAlign: "center",
    marginTop: 10,
  },
  midArea: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 25,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: "#C0BFC0",
    padding: 10,
    marginBottom: 10,
    width: "90%",
  },
  button: {
    backgroundColor: "#CF2C7C",
    marginTop: 10,
    padding: 20,
    borderRadius: 5,
    width: "95%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  bottomText: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: "400",
    textDecorationLine: "underline",
  },
});
