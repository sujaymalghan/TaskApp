import AddBook from './components/AddTask';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReadingList from './components/ReadingTask';
import { useState } from 'react';
import searchimages from './api';

function App() {

  const [tasks, setBooks] = useState([]);

  const addTask = async (task) => {

    const result =  await searchimages(task);
    result[0].taskname = task;   
      setBooks([...tasks, result]);
  };

  const deleteTask = (index) => {
    setBooks(oldTasks => oldTasks.filter((task, i) => i !== index));
  };

  return (
    <div className='container' style={{marginTop:20}}>

     <ReadingList tasks = {tasks} onDeleteTask={deleteTask} />
     <AddBook addTask={addTask} />

    </div>
  );
}

export default App;
