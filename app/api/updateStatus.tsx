import AsyncStorage from "@react-native-async-storage/async-storage";

const updateStatus = async (taskId: number, name: string, description: string, status: string, userId: number) => {
        try {
                const token = await AsyncStorage.getItem('token');

                console.log(token);
                console.group(taskId);
                console.log(name);
                console.log(description);
                console.log(status);
                console.log(userId);

                const response = await fetch(`http://192.168.20.105:3000/task/update`, {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                                id: taskId,
                                name: name,
                                description: description,
                                status: status === 'completed' ? 'pending' : 'completed',
                                userId: userId
                        }),
                })

                if(!response.ok) {
                        throw new Error('Network response was not ok');
                }

                const data = await response.json();
                return data;
        }
        catch (error) {
                throw new Error('Error occured while updating task');
        }
}

export default updateStatus;