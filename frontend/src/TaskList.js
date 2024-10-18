import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const TaskList = ({ tasks, onTaskDelete, onTaskEdit }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Card key={task.id} style={{ marginBottom: '10px' }}>
                    <CardContent>
                        <Typography variant="h5">{task.title}</Typography>
                        <Typography variant="body2" color="textSecondary">{task.description}</Typography>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={() => onTaskDelete(task.id)} 
                            style={{ marginTop: '10px', marginRight: '10px' }}
                        >
                            Delete
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => onTaskEdit(task)} 
                            style={{ marginTop: '10px' }}
                        >
                            Edit
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default TaskList;
