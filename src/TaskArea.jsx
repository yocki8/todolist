import TaskGenerator from './TaskGenerator';
import emptyTask from './assets/images/emptyTask3.png';
export default function TaskArea({ task, removeTask, markTaskCompleted }) {
    
    
    if (!task.length)
        return (
            <div className="opacity-50 mt-2">
                <img src={emptyTask} alt="List is empty" className=" h-56"></img>.
            </div>
        );
    
        else{
        return (
            <ul className="h-full w-full grid  rounded-[2rem] bg-gray-500/30 p-4">
                {task.map((props,index) => (
                    <TaskGenerator
                        {...props}
                        key={props.dateAdded}
                        removeTask={removeTask}
                        markTaskCompleted={markTaskCompleted}
                        first={index===0 ? true : false}
                        last={index===task.length-1 ? true: false}
                    />
                ))}
            </ul>
        );}
}

