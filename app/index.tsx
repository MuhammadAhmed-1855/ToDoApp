import { router } from 'expo-router';
import { Text, SafeAreaView, View, Image, StyleSheet, Button } from 'react-native';

const HomePage = () => {

        const handleLogin = () => {
               router.push('login'); 
        }

        const handleRegister = () => {
                router.push('register');
        }

        return (
                <SafeAreaView style={styles.container} >
                        <View>
                                <Image
                                        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/355/835/original/task-vector-icon.jpg' }}
                                        style={{
                                                width: 200,
                                                height: 200,
                                                alignSelf: 'center',
                                                margin: 20,
                                        }}
                                />
                                <View style={styles.buttons} >
                                        <Button
                                                title="Login"
                                                onPress={() => handleLogin()}
                                        />

                                        <Button
                                                title="Join Us"
                                                onPress={() => handleRegister()}
                                                
                                        />
                                        
                                </View>
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
        buttons: {
                margin: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
        },
});

export default HomePage;