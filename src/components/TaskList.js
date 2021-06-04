import React, { useContext } from 'react';
import {TaskListContext} from '../context/TaskListContext';
import Task from './Task';
const TaskList = () => {
   const {Tasks} = useContext(TaskListContext);
   //console.log(Tasks);
    return (
        <div>
            {Tasks.length 
                ?(
                    <ul className='p-0'>
                        {Tasks.map((task) => {
                            return <Task task={task} key={task.id} />;
                        })}
                    </ul>
                )
                :(
                        <h2 className="text-center text-danger">no task</h2>
                )
            }      
        </div>
    )
}

export default TaskList;
