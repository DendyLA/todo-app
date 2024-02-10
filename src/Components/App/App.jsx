import AddForm from '../addForm/AddForm'
import TaskItems from '../taskItems/TaskItems'
import './app.css'

const App = () => {
	return (
		<div className="main">
			<div className="container">
				<AddForm/>
				<div className="task">
					<TaskItems/>
					<TaskItems/>
				</div>
			</div>
		</div>
	)
	}

export default App
