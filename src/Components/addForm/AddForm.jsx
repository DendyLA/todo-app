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

    render() {

        return(
            <form action="" className="addingForm">
                <div className="addingForm__input">
                    <input type="text" placeholder="Title..."/>
                    <input type="text" placeholder="About..."/>
                </div>
                <button className="button button_form">
                    +
                </button>
            </form>
        )
    }
}

export default AddForm
