

import './taskItems.css'

const TaskItems = () => {
    
    return(
        <div className="task__item">
            <div className="title__descr">
                <div className="task__title">Task Title</div>
                <div className="task__about">Task body about this task</div>
            </div>
            <button className="button task__button"></button>
        </div>
    )
}

export default TaskItems