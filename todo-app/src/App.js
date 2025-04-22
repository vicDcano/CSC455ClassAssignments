import { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setTasks([...tasks, { text: inputText, completed: false }]);
      setInputText('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    if (editingIndex === index) {
      setEditingIndex(null);
    }
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index].text);
  };

  const handleSaveEdit = (index) => {
    if (editText.trim() !== '') {
      const newTasks = tasks.map((task, i) => 
        i === index ? { ...task, text: editText } : task
      );
      setTasks(newTasks);
      setEditingIndex(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <div className="App">
      <h1>My To-Do List📝</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          class = "top-input"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Add a new task..."
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(index)}
                  className="checkbox"
                />
                <span onClick={() => handleToggleComplete(index)}>
                  {task.text}
                </span>
                <div className="task-actions">
                  <button onClick={() => handleEditTask(index)}>Edit</button>
                  <button onClick={() => handleDeleteTask(index)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;