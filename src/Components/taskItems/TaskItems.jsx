import { Component } from 'react'

import './taskItems.css'

class TaskItems extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {title, about, id} = this.props;
        return(
            <div className="task__item" key={id}> 
                <div className="title__descr">
                    <div className="task__title">{title}</div>
                    <div className="task__about">{about}</div>
                </div>
                <button className="button task__button">
                    <span></span>
                    <span></span>
                </button>
            </div>
        )
    }
    
}

export default TaskItems