
const express = require("express");
const router = express.Router();
const { getAllTasks, addTask, updateTask, deleteTask } = require("../model/task");

// GET /tasks: Retorna todas as tarefas
router.get("/", (req, res) => {
    res.json(getAllTasks());
});

// POST /tasks: Cria uma nova tarefa
router.post("/", (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: "Título e descrição são obrigatórios." });
    }
    const newTask = addTask(title, description);
    res.status(201).json(newTask);
});

// PUT /tasks/:id: Atualiza uma tarefa existente
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updatedTask = updateTask(Number(id), { title, description, completed });
    if (!updatedTask) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
    }
    res.json(updatedTask);
});

// DELETE /tasks/:id: Exclui uma tarefa
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const deletedTask = deleteTask(Number(id));
    if (!deletedTask) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
    }
    res.json(deletedTask);
});

module.exports = router;
