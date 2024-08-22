import { useState } from 'react';
import { Link } from 'expo-router';
import { Text, SafeAreaView, View, StyleSheet, TextInput, Button } from 'react-native';
import registerAPI from '../api/register';

const RegisterPage = () => {

        const [name, setName] = useState('');
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleRegister = () => {
                registerAPI(name, username, email, password);
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
                                        Register
                                </Text>

                                <TextInput
                                        placeholder="Name"
                                        value={name}
                                        onChangeText={(text) => setName(text)}
                                        style={{
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                margin: 15,
                                                textAlign: 'center',
                                        }}
                                />

                                <TextInput
                                        placeholder="Username"
                                        value={username}
                                        onChangeText={(text) => setUsername(text)}
                                        style={{
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                margin: 15,
                                                textAlign: 'center',
                                        }}
                                />

                                <TextInput
                                        placeholder="Email"
                                        value={email}
                                        onChangeText={(text) => setEmail(text)}
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
                                        style={{
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                margin: 15,
                                                textAlign: 'center',
                                        }}
                                />

                                <Button
                                        title="Sign Up"
                                        onPress={() => handleRegister()}
                                />

                                

                                <Link href="login" style={{ 
                                        color: 'blue',
                                        textAlign: 'center',
                                        margin: 10,
                                }}>
                                        Already have an account? Login here.
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

export default RegisterPage;