import { useState } from 'react';
import { Link } from 'expo-router';
import { Text, SafeAreaView, View, StyleSheet, TextInput, Button } from 'react-native';
import loginAPI from '../api/login';

const LoginPage = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleLogin = () => {
                
                if (!email.trim() && !password.trim()) {
                        alert('Please enter email and password');
                }
                else if (!email.trim()) {
                        alert('Please enter email');
                }
                else if (!password.trim()) {
                        alert('Please enter password');
                }
                else {
                        loginAPI(email, password);
                }
        }

        return (
                <SafeAreaView style={styles.container}>
                        <View>
                                <Text
                                        style={{
                                                fontSize: 48,
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                margin: 20,
                                        }}
                                >
                                        Login
                                </Text>

                                <TextInput
                                        placeholder="Email"
                                        value={email}
                                        onChangeText={(text) => setEmail(text)}
                                        inputMode='email'
                                        style={{
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                margin: 15,
                                                textAlign: 'center',
                                        }}
                                />

                                <TextInput
                                        placeholder="Password"
                                        value={password}
                                        onChangeText={(text) => setPassword(text)}
                                        secureTextEntry={true}
                                        style={{
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                margin: 15,
                                                textAlign: 'center',
                                        }}
                                />

                                <Button
                                        title="Sign In"
                                        onPress={() => handleLogin()}
                                />

                                

                                <Link href="register" style={{ 
                                        color: 'blue',
                                        textAlign: 'center',
                                        margin: 10,
                                }}>
                                        Don't have an account? Register here.
                                </Link>
                        </View>
                </SafeAreaView>
        );
};

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
        },
});

export default LoginPage;