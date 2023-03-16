import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [email, useEmail] = useState();
  const [password, usePassword] = useState();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.text}>
        <Text style={styles.login}>Log in</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          style={styles.input}
          onChangeText={(value) => {
            useEmail(value);
          }}
          placeholder="Username"
        />
      </View>
      <View>
        <TextInput
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          style={styles.input}
          onChangeText={(value) => {
            usePassword(value);
          }}
          placeholder="Password"
        />
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.sigup}>
        <Text>Dont have an account?</Text>
        <Text style={styles.up}>Sign up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BA9E8E",
    paddingHorizontal: 50,
  },
  text: {
    marginTop: 100,
  },
  login: {
    fontSize: 60,
    fontWeight: "500",
    color: "white",
  },
  input: {
    marginTop: 50,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 20,
    paddingBottom: 10,
  },
  forgot: {
    marginTop: 10,
    textAlign: "right",
    color: "white",
    fontSize: 15,
  },
  button: {
    marginTop: 70,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  buttontext: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
  },
  sigup: {
    marginTop: 50,
    flexDirection: "row",
    alignSelf: "center",
  },
  up: {
    marginLeft: 10,
    color: "white",
    fontWeight: "500",
  },
});
