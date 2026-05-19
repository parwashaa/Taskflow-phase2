import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TaskListPage from "./pages/TaskListPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import { Task } from "./types/task";
import { initialTasks } from "./data/mockTasks";

function AppContent() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const navigate = useNavigate();

  const handleCreateTask = (task: Task) => {
    setTasks((prev) => [task, ...prev]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    navigate("/create");
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <TaskListPage
                tasks={tasks}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            }
          />
          <Route
            path="/create"
            element={
              <CreateTaskPage
                onCreateTask={handleCreateTask}
                editingTask={editingTask}
                onUpdateTask={handleUpdateTask}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;