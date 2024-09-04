import CustomButton from "@/components/CustomButton";
import { Href, Link, router } from "expo-router";
import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 50, fontWeight: 800, color: "black" }}>
        Registartion
      </Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={"gray"}
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 8,
          width: "90%",
          margin: 10,
          height: 50,
          padding: 10,
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={"gray"}
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 8,
          width: "90%",
          margin: 10,
          padding: 10,
          height: 50,
        }}
      />
      <CustomButton
        title="Sing In"
        onPress={handleLogin}
        additionalButtonClassName={
          {
            width: "70%",
            height: 50,
            backgroundColor: "black",
            margin: 10,
          } as any
        }
        additionalButtonTextClassName={
          {
            color: "white",
            fontSize: 25,
            fontWeight: 800,
          } as any
        }
      />
      <View
        style={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      >
        <Text
          style={{
            color: "gray",
          }}
        >
          Already with us?{" "}
        </Text>
        <Link
          href={"/SignIn" as Href}
          style={{ color: "blue", textDecorationLine: "underline" }}
        >
          Sign In
        </Link>
      </View>
    </View>
  );
}
