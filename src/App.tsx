
import { useState } from 'react';
import './App.css'
import { TaskDetails } from './components/taskDetails'
import { TaskList } from './components/taskList'

function App() {

  const [selectedTaskId, setSelectedTaskId] = useState("");

  return (
    <div className="main_content">
      <header>
        <h1>To-Done</h1>
      </header>
      <section className="left_side">
        <TaskList setSelectedTaskId={setSelectedTaskId}></TaskList>
      </section>

      <section className="right_side">
        <TaskDetails selectedTaskId={selectedTaskId}></TaskDetails>
      </section>
      <footer>
        <button>New Task</button>
        <button>New Category</button>
      </footer>
    </div>
  );
}

export default App
