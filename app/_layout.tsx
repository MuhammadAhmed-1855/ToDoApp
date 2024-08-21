import { Stack } from "expo-router";


const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{
                headerTitle: 'Home',
        }} />
        <Stack.Screen name="login/index" options={{
                headerTitle: 'Login',
        }} />
    </Stack>
  );
}

export default RootLayout;