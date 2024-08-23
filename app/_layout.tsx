import { Stack } from "expo-router";


const RootLayout = () => {
  return (
    <Stack initialRouteName="task/index">
        <Stack.Screen name="index" options={{
                headerTitle: 'Home',
        }} />
        <Stack.Screen name="login/index" options={{
                headerTitle: 'Login',
        }} />
        <Stack.Screen name="register/index" options={{
                headerTitle: 'Register',
        }} />
        <Stack.Screen name="task/index" options={{
                headerTitle: 'Tasks',
        }} />
    </Stack>
  );
}

export default RootLayout;