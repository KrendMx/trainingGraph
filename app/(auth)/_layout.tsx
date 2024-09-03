import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
            title: '',
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
            title: '',
          }}
        />
      </Stack>
      <StatusBar hidden={true} />
    </>
  );
}
