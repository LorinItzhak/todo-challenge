import './Setting.css'

export const Setting = ({idCounter,onDeleteTask,task,}) => {

    const taskCounter = idCounter;
    console.log('the id counter is: ',idCounter);

    const deleteCompletedTasks = () => {
        let countTrue = 0;
        for(let i = 0; i< task.length;i++){
            if(task[i].checkBoxStatus === true)
            {
                countTrue = countTrue + 1;
            }
        }
        if (countTrue > 0){
            onDeleteTask(); 
        }
        return countTrue;
    };

    return <>
    <div className="setting">
    <p className="task_counter">{taskCounter} item left </p>
    <button className="btn">All</button>
    <button className="btn">Active</button>
    <button className="btn">Completed</button>
    <button className="btn" onClick={deleteCompletedTasks}>Clear completed</button>
    </div>
    </>
}