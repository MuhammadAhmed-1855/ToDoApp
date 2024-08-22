import { SafeAreaView, View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import fetchTasksAPI from '../api/fetchTasks'

const index = () => {

        const [taskList, setTaskList] = useState('')

        useEffect(() => {
                fetchTasksAPI().then((tasks) => {
                        // setTaskList(tasks)
                        console.log("Tasks: ", tasks[0].name)
                })
        }, [])

        return (
                <SafeAreaView>
                        
                </SafeAreaView>
        )
}

export default index