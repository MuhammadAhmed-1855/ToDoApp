import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchTasks = async () => {
        try {
                const token = await AsyncStorage.getItem('token');

                const response = await fetch('http://192.168.20.105:3000/task', {
                        method: 'GET',
                        headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                        },
                })
                
                if(!response.ok) {
                        throw new Error('Network response was not ok');
                }

                const data = await response.json();
                return data;
        }
        catch (error) {
                throw new Error('Error occured while fetching tasks');
        }
}

export default fetchTasks;