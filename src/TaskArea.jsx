import TaskGenerator from './TaskGenerator';
import emptyTask from './assets/images/emptyTask3.png';
export default function TaskArea(props) {
    const props1 = props;
    const task = props.task;
    if (!task.length)
        return (
            <div className="mt-2 opacity-50">
                <img src={emptyTask} alt="List is empty" className=" h-56"></img>.
            </div>
        );
    else {
        return (
            <ul className="grid h-full w-full  rounded-[2rem] bg-gray-500/30 p-4">
                {task.map((props, index) => (
                    <TaskGenerator {...props} {...props1} key={props.dateAdded} first={index === 0} last={index === task.length - 1} />
                ))}
            </ul>
        );
    }
}
