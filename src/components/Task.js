import React,{useContext} from 'react';
import { TaskListContext } from '../context/TaskListContext';

const Task = ({task}) => {
  const{removeTask,findItem}=useContext(TaskListContext);
    return (
        <li className='list-group-item bg-danger text-light d-flex justify-content-between border-danger my-2 '>
            <span>{task.task}</span>
            <div>
                <button onClick={()=>removeTask(task.id)} className='mx-2 border-0'>
                  <i className="fas fa-trash-alt "></i>    
                </button>
                <button onClick={()=>findItem(task.id)} className='mx-2 border-0' >
                  <i className="fas fa-pen "></i>    
                </button>
            </div>
        </li>
    );
}

export default Task;
