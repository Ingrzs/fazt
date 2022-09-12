import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [descciption, setDescciption] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    createTask({ title, descciption });

    setTitle("");
    setDescciption("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSumbit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <textarea
        placeholder="escribe tu info"
        onChange={(e) => setDescciption(e.target.value)}
        value={descciption}
        className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button
      className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}
export default TaskForm;