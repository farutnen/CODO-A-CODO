import React from "react";
import Task from "../Task/Task";

//vos tenés que renderizar éste componente afuera

const ListTasks = ({ tasks, renderTask}) =>{
    return (
            {tasks.map((task) => {
                return (
                    renderTask(task))}
    )
}
<form
    inSubmited={(e) =>{
        addTask(e);
    }}
    />
    <listTasks 
    tasks={tasks}
    deleteTask={deleteTask}
    />
    </div>
    );
};
export default TodoView;