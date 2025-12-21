
import './App.css'
import { TaskDetails } from './components/taskDetails'
import { TaskList } from './components/taskList'

function App() {

  return (
    <>
      <div className="header">derp</div>
      <div className="left-side">
        <TaskList></TaskList>
      </div>
      <div className="right-side">
        <TaskDetails></TaskDetails>
      </div>
    </>
  )
}

export default App
