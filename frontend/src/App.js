import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask } from './api';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Container, Typography } from '@mui/material';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);

    const loadTasks = async () => {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleTaskCreated = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleTaskDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleTaskEdit = (task) => {
        setCurrentTask(task);
    };

    const handleTaskUpdated = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
        setCurrentTask(null); // Reset current task after updating
    };

    return (
        <Container style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>Task Manager</Typography>
            <TaskForm 
                onTaskCreated={handleTaskCreated} 
                currentTask={currentTask} 
                onTaskUpdated={handleTaskUpdated} 
            />
            <TaskList tasks={tasks} onTaskDelete={handleTaskDelete} onTaskEdit={handleTaskEdit} />
        </Container>
    );
};

export default App;
