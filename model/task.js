
let tasks = [];
let idCounter = 1;

const getAllTasks = () => tasks;

const addTask = (title, description) => {
    const newTask = { id: idCounter++, title, description, completed: false };
    tasks.push(newTask);
    return newTask;
};

const updateTask = (id, updates) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        Object.assign(task, updates);
    }
    return task;
};

const deleteTask = (id) => {
    const index = tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
        return tasks.splice(index, 1)[0];
    }
    return null;
};

module.exports = { getAllTasks, addTask, updateTask, deleteTask };
