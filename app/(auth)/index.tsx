import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const AuthLayout = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <View className="">
      <Text className="">Login</Text>
      <TextInput
        className=""
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className=""
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default AuthLayout;
