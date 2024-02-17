import { Component } from 'react'
import AddForm from '../addForm/AddForm'
import TaskItems from '../taskItems/TaskItems'
import MessageInfo from '../messageInfo/MessageInfo'

import './app.css'

class App extends Component {
	state= {
		title:'',
		about: '',
		tasks: []
	}
	

	onChangeTitle = (e) => {
        this.setState({
            title: e
        })
    }

    onChangeAbout = (e) => {
        this.setState({
            about: e
        })
    }


	onAddTask = (e) => {
		e.preventDefault()
		const {title, about} = this.state;
		const task = {
			id: Math.random(),
			title: title,
			about: about
		}
		this.setState(({tasks}) => ({
			tasks: [...tasks, task]
		}))
	}

	render(){
		const lengthTasks = this.state.tasks.length;
		let haveTask = false;
		if(lengthTasks == 0){
			haveTask = false;
		}else{
			haveTask = true;
		}

		const message = haveTask ? null : <MessageInfo/>
		const {tasks} = this.state;
		return (
		<div className="main">
			<div className="container">
				<AddForm onAddTask={this.onAddTask} onChangeTitle={this.onChangeTitle} onChangeAbout={this.onChangeAbout}/>
				<div className="task">
					{tasks.map((i) => {
						return <TaskItems id={i.id} title={i.title} about={i.about}/>
					})
					}
					{message}
				</div>
			</div>
		</div>
		)
	}
	
}

export default App
