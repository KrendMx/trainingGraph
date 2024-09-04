import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="SignIn"
          options={{
            headerShown: false,
            title: "Sign In",
          }}
        />
        <Stack.Screen
          name="SignUp"
          options={{
            headerShown: false,
            title: "Sign Up",
          }}
        />
      </Stack>
      {/* <StatusBar hidden={tru}/> */}
    </>
  );
}
