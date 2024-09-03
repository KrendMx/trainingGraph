import React from "react";
import { Text, View } from "react-native";
import { Href, router } from "expo-router";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>
        Where I was?
      </Text>
      <Text
        style={{
          padding: 8,
          fontSize: 20,
          textAlign: "center",
          color: "white",
        }}
      >
        Probably the best application for people that loves find their own ways
        in the travels
      </Text>
      <CustomButton
        title="Sign In"
        onPress={() => router.push("/auth" as Href)}
        additionalButtonClassName="w-[90vw] m-4 bg-white"
        additionalButtonTextClassName="text-black font-bold text-lg"
      />
    </View>
  );
}
