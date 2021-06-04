import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
    //editItem is used in useEffect if it is not null then setnewTask is execute and editTask is execute in handleSubmit 
    const [newTask, setnewTask] = useState('');

    const handleChange = (e) => {
        setnewTask(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((editItem === null) && newTask)//execute when(add item) no edit event ocuur and only new task is enter
        {
            addTask(newTask);
            setnewTask('');
        }
        if (editItem)//execute when editEvent is occur
        {
            editTask(newTask, editItem.id)
        }
    }
    useEffect(() => {
        if (editItem) {
            setnewTask(editItem.task);
        }
        else {
            setnewTask("");
        }
    }, [editItem]);//render only when there is change in edititem
    return (
        <div className='p-3'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='add task' className='form-control border-dark my-2' value={newTask} onChange={handleChange} />
                <div className='my-2 d-flex justify-content-around'>
                    <button className='btn btn-danger font-weight-bold '>
                       {editItem ? 'EDIT TASK' : 'ADD ITEM'}
                    </button>
                    <button onClick={clearList} className='btn btn-danger font-weight-bold'>CLEAR</button>
                </div>
            </form>
        </div>
    );
}
export default TaskForm;
