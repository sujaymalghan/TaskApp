import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function AddBook({addTask}){

    const [tasks,settasks ] = useState("")
    const [error,seterror] = useState("")

    const handleFormSubmit = (event) =>{
        event.preventDefault();

        if (tasks.length===0 || tasks.trim ==="")
        {
                seterror("Input cannot be empty")
        }
        else {
            seterror("")
            addTask(tasks);
            settasks("");
        }

    };
   const handlechange = (event) =>{
    settasks(event.target.value);
};
    return (
    <div className="row">
    <h3>Add Task</h3>
        <form onSubmit={handleFormSubmit}>
        <div >
        <input type="text" className="form-control" id="book" placeholder="Atomic Habits" onChange={handlechange}  value = {tasks} style={{width:200}}/>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop:10}} >Submit</button>
        {error && <p>{error}</p>}
        </form>
    </div>    
        );

}




export default AddBook;