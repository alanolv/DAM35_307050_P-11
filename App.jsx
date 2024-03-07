import React from "react";
import { View, StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import { useState } from "react";
import InputLogin from "./components/InputLogin";
import LoginButton from "./components/LoginButton";

const App = () => {
  const [expediente, setExpediente] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const users = [
    {
      expediente: "123456",
      password: 123,
    },
  ];

  const handleLogin = () => {
    expediente == users[0].expediente && password == users[0].password
      ? setMensaje("Bienvenido")
      : setMensaje("Usuario o contraseña incorrectos");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" />
      <View style={styles.loginCard}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputsView}>
          <InputLogin
            placeholder="Expediente"
            onChangeText={setExpediente}
            value={expediente}
          />
          <InputLogin
            placeholder="Contraseña"
            onChangeText={setPassword}
            value={password}
          />
          <LoginButton title="Iniciar sesión" onPress={handleLogin} />
          <Text style={styles.msj}>{mensaje}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loginCard: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    marginHorizontal: 50,
    marginVertical: 100,
    //backgroundColor:"black",
  },
  inputsView: {
    marginVertical: 20,
    justifyContent: "end",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  msj: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: 30,
  },
});
export default App;
