import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const login = (email: string, password: string) => {
        try {
                fetch('http://192.168.20.105:3000/user/login', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                                email,
                                password,
                        }),
                })
                .then((res) => res.json())
                .then((data) => {
                        alert("Login Successful");
                        AsyncStorage.setItem('token', data.access_token);
                        router.push('task');
                })
                .catch((err) => {
                        alert(err);
                })
        } catch (error) {
                console.error(error);
        }
}

export default login;