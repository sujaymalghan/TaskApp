import { useState, useEffect } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';

function ReadingList({ tasks, onEditTask, onDeleteTask }) {
    var c = tasks;
    const [isEditing, setEditing] = useState(new Array(tasks.length).fill(false));
    const [taskNames, setTaskNames] = useState(tasks.map(task => task[0].taskname));

    useEffect(() => {
        setTaskNames(tasks.map(task => task[0].taskname));
        setEditing(new Array(tasks.length).fill(false));
    }, [tasks]);

    function handleEdit(task, index){
        const newIsEditing = [...isEditing];
        newIsEditing[index] = !newIsEditing[index];
        setEditing(newIsEditing);
    }

    function handleTaskNameChange(index, newTaskName) {
        const newTaskNames = [...taskNames];
        newTaskNames[index] = newTaskName;
        setTaskNames(newTaskNames);
    }

    function handleDelete(index) {
        onDeleteTask(index);
    }

    return (
        <div>
            <h3>Task List</h3>
            <div className="row">
            {c && c.map((item, index) => (
                <div className="col-sm-3"  key={index}>
                    <div className="card">
                        <img className="card-img-top" src={item[0].urls.small} alt="" />
                        <div className="card-body">
                            <h5 className="card-title"> Task {index + 1 } </h5>
                            {isEditing[index] ? (
                                <input
                                    type="text"
                                    value={taskNames[index]}
                                    onChange={e => handleTaskNameChange(index, e.target.value)}
                                    onBlur={() => handleEdit(item[0], index)}
                                    autoFocus
                                />
                            ) : (
                                <p className="display-6">{taskNames[index] || item[0].taskname}</p>
                            )}
                            <span> 
                                <button onClick={() => handleEdit(item[0], index)} style={{marginLeft:200, color:'BLUE' } }>
                                    <FiEdit2/> 
                                </button>
                                <button onClick={() => handleDelete(index)} style={{marginLeft:10, color:'red'}}>
                                    <MdDeleteOutline/>
                                </button>                
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ReadingList;
