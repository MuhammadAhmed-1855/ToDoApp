import { StyleSheet, Text, Modal, View, TextInput, Button, Pressable } from 'react-native';
import { useState } from 'react';
import addTaskAPI from '../api/addTask';

type AddTaskProps = {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    onTaskAdded: () => void;
};

const AddTask = ({ modalVisible, setModalVisible, onTaskAdded }: AddTaskProps) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = async () => {
        if (!name.trim() && !description.trim()) {
            alert('Please enter all fields');
        }
        else if (!name.trim()) {
            alert('Please enter name');
        }
        else if (!description.trim()) {
            alert('Please enter description');
        } 
        else {
            const newTask = await addTaskAPI(name, description);
            onTaskAdded();
            setModalVisible(false);
            
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)} // Close modal on request
        >
                <View style={styles.modalBackground}>
                        <View style={styles.modalView}>

                                <Pressable style={styles.close}>
                                        <Text style={{ fontSize: 20, color: 'red' }} onPress={() => setModalVisible(false)}>X</Text>
                                </Pressable>

                                <Text style={{ fontSize: 20, margin: 10 }}>Add Task</Text>

                                <TextInput
                                placeholder="Task Name"
                                value={name}
                                onChangeText={(text) => setName(text)}
                                style={styles.input}
                                />

                                <TextInput
                                placeholder="Description"
                                value={description}
                                onChangeText={(text) => setDescription(text)}
                                style={styles.input}
                                />

                                <View style={styles.buttons}>
                                        <Button
                                                title="Add Task"
                                                onPress={handleAddTask}
                                        />
                                </View>

                                
                        </View>
                </View>
        </Modal>
    );
};

export default AddTask;

const styles = StyleSheet.create({
        input: {
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                margin: 15,
                textAlign: 'center',
                width: 200,
        },
        modalBackground: {
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                justifyContent: 'center',
                alignItems: 'center',
        },
        modalView: {
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
        },
        buttons: {
                margin: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
        },
        close: {
                alignSelf: 'flex-end',
                margin: 10,
        },
});
