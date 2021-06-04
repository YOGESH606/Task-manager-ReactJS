import React, { useState, createContext,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext=createContext();
 
const TaskListContextProvider = (props) => {
    const intialState=JSON.parse(localStorage.getItem("Tasks"))||[];
    const [Tasks, setTasks] = useState(intialState);
    const[editItem,setEditItem]=useState(null); 

    useEffect(() => {
        localStorage.setItem("Tasks",JSON.stringify(Tasks));//JSON stringyfy convert js object into json
    }, [Tasks])

     const addTask=(task)=>{
         setTasks([...Tasks,{task:task,id:uuidv4()}])
     }
     const removeTask=(id)=>{
         setTasks(Tasks.filter((task)=>task.id!==id));
     }
     const clearList=()=>{
         setTasks([]);
     }
     const findItem=(id)=>{ 
        const item=Tasks.find(task=>task.id===id);
        setEditItem(item);//storing the item object which generate edit event
     }//findItem is used to find which task is generating edit Event
     const editTask=(title,id)=>{
        const newTask=Tasks.map(task=>(task.id===id ? {task:title,id:id} :task));
        setTasks(newTask);
        setEditItem(null);
       console.log(title);     
     }
   return(
       <TaskListContext.Provider value={{Tasks,addTask,removeTask,clearList,findItem,editTask,editItem}}>
           {props.children}
       </TaskListContext.Provider>
   );
};

export default TaskListContextProvider;