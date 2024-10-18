import React, { useEffect, useState } from 'react';
import { createTask, updateTask } from './api';
import { TextField, Button } from '@mui/material';

const TaskForm = ({ onTaskCreated, currentTask, onTaskUpdated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (currentTask) {
            setTitle(currentTask.title);
            setDescription(currentTask.description);
        }
    }, [currentTask]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { title, description };

        if (currentTask) {
            const updatedTask = await updateTask(currentTask.id, taskData);
            onTaskUpdated(updatedTask);
        } else {
            const createdTask = await createTask(taskData);
            onTaskCreated(createdTask);
        }

        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <TextField 
                label="Task Title" 
                variant="outlined" 
                fullWidth 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
                style={{ marginBottom: '10px' }}
            />
            <TextField 
                label="Task Description" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                style={{ marginBottom: '10px' }}
            />
            <Button type="submit" variant="contained" color="primary">
                {currentTask ? 'Update Task' : 'Add Task'}
            </Button>
        </form>
    );
};

export default TaskForm;
