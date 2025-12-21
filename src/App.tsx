
import './App.css'
import { TaskDetails } from './components/taskDetails'
import { TaskList } from './components/taskList'

function App() {

  return (
    <div className="main_content">
      <header>
        <h1>To-Done</h1>
      </header>
      <section className="left_side">
        <TaskList></TaskList>
      </section>

      <section className="right_side">
        <TaskDetails></TaskDetails>
      </section>
    </div>
  );
}

export default App
