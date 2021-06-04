import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from "./TaskList";
import TaskListContextProvider from '../context/TaskListContext';
 import TaskForm from "./TaskForm";
 import Header from './Header';
 const App=()=>{
  return (
    <TaskListContextProvider>
      <div style={{ backgroundColor:'#99ebff',maxWidth:'500px'}} className='container border border-success py-4'>
        <Header/>
        <TaskForm/>
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
};
export default App;
