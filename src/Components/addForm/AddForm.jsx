import { Component } from "react"

import './addForm.css'

class AddForm extends Component {
    constructor(props){
        super(props)
    }

    state = {
        title: '',
        about: ''
    }

    
    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
        this.props.onChangeTitle(e.target.value)
    }

    onChangeAbout = (e) => {
        this.setState({
            about: e.target.value
        })
        this.props.onChangeAbout(e.target.value)
    }

    render() {
        const {onAddTask} = this.props;
        return(
            <form action="" className="addingForm" onSubmit={onAddTask}>
                <div className="addingForm__input">
                    <input value={this.state.title} onChange={this.onChangeTitle} type="text" placeholder="Title..."/>
                    <input value={this.state.about} onChange={this.onChangeAbout} type="text" placeholder="About..."/>
                </div>
                <button className="button button_form">
                    +
                </button>
            </form>
        )
    }
}

export default AddForm
