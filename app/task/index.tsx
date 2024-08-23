import { SafeAreaView, View, Text, VirtualizedList, StyleSheet, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import fetchTasksAPI from '../api/fetchTasks'
import Ionicons from '@expo/vector-icons/Ionicons';
import updateStatusAPI from '../api/updateStatus';

type Task = {
        id: number
        name: string
        description: string
        status: string
        userId: number
}

const index = () => {

        const [taskList, setTaskList] = useState<Task[]>([]);

        const fetchData = async () => {
                try {
                        const tasks: Task[] = await fetchTasksAPI();
                        // console.log(tasks);
                        setTaskList(tasks);
                }
                catch (error) {
                        console.log(error);
                }
        }

        const handlePress = async (taskId: number, name: string, description: string, status: string, userId: number) => {
                try {
                        console.log("Aliens are coming");
                        const updatedTask = await updateStatusAPI(taskId, name, description, status, userId);
                        console.log(updatedTask);
                        fetchData();
                }
                catch (error) {
                        console.log(error);
                }
        }

        useEffect(() => {
                fetchData();
        }, [])

        return (
                <SafeAreaView style={styles.container}>
                        <View>
                                <VirtualizedList
                                        data={taskList}
                                        initialNumToRender={4}
                                        renderItem={({ item }: { item: Task }) => (
                                                <Pressable 
                                                        style={styles.taskContainer}
                                                        onPress={() => handlePress(item.id, item.name, item.description, item.status, item.userId)}
                                                >
                                                        <View style={styles.taskStatus} >
                                                                {
                                                                        item.status === 'completed'
                                                                        ? 
                                                                        <Ionicons name="checkmark-circle" size={24} color="green" />
                                                                        :
                                                                        <Ionicons name="checkmark-done" size={24} color="red" />
                                                                }
                                                        </View>
                                                        <Text style={styles.taskHeader} >{item.name}</Text>
                                                        <Text style={styles.taskDesc} >{item.description}</Text>
                                                </Pressable>
                                        )}
                                        keyExtractor={item => item.id.toString()}
                                        getItemCount={() => taskList.length}
                                        getItem={(data, index) => data[index]}
                                />
                        </View>
                </SafeAreaView>
        )
}

export default index

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
        },
        taskContainer: {
                padding: 10,
                margin: 10,
                backgroundColor: 'lightgray',
                borderRadius: 15,
        },
        taskHeader: {
                fontSize: 24,
                fontWeight: 'bold',
        },
        taskDesc: {
                fontSize: 18,
        },
        taskStatus: {
                fontSize: 14,
                alignSelf: 'flex-end',
        },
})