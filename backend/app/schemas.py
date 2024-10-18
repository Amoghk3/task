from typing import Optional
from pydantic import BaseModel
from datetime import datetime

# Schema for creating a task
class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None
    status: Optional[str] = "pending"

# Schema for updating a task
class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None

# Schema for retrieving tasks
class Task(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    status: str
    created_at: datetime  # This ensures that the field is handled as a datetime object

    class Config:
        orm_mode = True
