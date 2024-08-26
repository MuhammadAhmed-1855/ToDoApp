import AsyncStorage from "@react-native-async-storage/async-storage";

type AddTaskProps = {
        name: string
        description: string
}

const addTask = async (name: string, description: string) => {

        try {
                const token = await AsyncStorage.getItem('token');

                const response = await fetch('http://192.168.20.105:3000/task/add', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                                name,
                                description,
                                status: 'pending',
                        }),
                })
        }
        catch(error) {
                console.error(error);
        }
  
}

export default addTask