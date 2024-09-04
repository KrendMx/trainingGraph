import CustomButton from "@/components/CustomButton";
import { Href, Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function SignIn() {
  const [email, setEmail] = useState<String | null>("");
  const [password, setPassword] = useState<String | null>("");

  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 50, fontWeight: 800, color: "black" }}>
        Authorization
      </Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={"gray"}
        value={email as string}
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
        value={password as string}
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
        <Text style={{ color: "gray" }}>Don't have an account? </Text>
        <Link
          href={"/SignUp" as Href}
          style={{ color: "blue", textDecorationLine: "underline" }}
        >
          Sign Up
        </Link>
      </View>
    </View>
  );
}
