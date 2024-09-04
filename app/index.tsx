import React from "react";
import { Text, View } from "react-native";
import { Href, router } from "expo-router";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 50, fontWeight: 800, color: "black" }}>
        TrainGraph
      </Text>
      <Text style={{ fontSize: 24, marginVertical: 14, fontWeight: 200 }}>
        Secure your goals
      </Text>
      <CustomButton
        title="Join"
        onPress={() => router.push("/SignIn" as Href)}
        additionalButtonClassName={
          {
            width: "90%",
            height: 50,
            backgroundColor: "black",
            margin: 10,
            marginTop: 150,
          } as any
        }
        additionalButtonTextClassName={
          {
            color: "white",
            fontSize: 25,
          } as any
        }
      />
    </View>
  );
}
