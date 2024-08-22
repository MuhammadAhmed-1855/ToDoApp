import AsyncStorage from '@react-native-async-storage/async-storage';

const register = (name: string, username: string, email: string, password: string) => {
        try {
                fetch('http://192.168.20.105:3000/user/register', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                                name,
                                username,
                                email,
                                password,
                        }),
                })
                .then((res) => res.json())
                .then((data) => {
                        alert("Registration Successful");
                })
                .catch((err) => {
                        alert(err);
                })
        }
        catch (error) {
                console.error(error);
        }
}

export default register;