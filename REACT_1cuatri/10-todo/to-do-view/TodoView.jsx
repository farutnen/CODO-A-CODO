const completeTask = (id) => {
    const draft = stucturedClone(tasks);
    const task = draft.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(draft);
};

return (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">todos</h1>
        </header>
        <div className="App-intro">
            {tasks.map((task) => (
                <Task key={task.id} task={task} completeTask={completeTask} />
            ))}
        </div>
    </div>
)