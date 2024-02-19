import 'animate.css';
import { useState, useEffect,useRef } from 'react';
import AddTaskButton from './AddTaskButton';
import AddTaskWindow from './AddTaskWindow';
import TaskArea from './TaskArea';
import ToggleDaysMenu from './ToggleDaysMenu';

export default function CreateTaskSection() {
    const [tasks, setTasks] = useState([[], [], []]);
    const [active, setActive] = useState(1);
    const [showAddWindow, setShowAddWindow] = useState(false);


    useEffect(() => {

        const data = window.localStorage.getItem('Days_Tasks');
        let tasksFetched = JSON.parse(data);

        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate());
        currentDate.setHours(0, 0, 0, 0);
        let tasksStore = [[], [], []];

        if (tasksFetched)
            tasksFetched.forEach((tasks, index) => {
                if (tasks.length) {
                    let dateAdded = new Date(tasks[0].dateAdded);
                    dateAdded.setHours(0, 0, 0, 0);
                    const daysPassed = (currentDate - dateAdded) / (1000 * 60 * 60 * 24);
                    if (daysPassed === 1) {
                        const temp = [...tasksFetched[index]];
                        tasksFetched[index] = [];
                        tasksFetched[0] = temp;
                    }
                    if (daysPassed === 0) {
                        const temp = [...tasksFetched[index]];
                        tasksFetched[index] = [];
                        tasksFetched[1] = temp;
                    }
                    if (daysPassed === -1) {
                        const temp = [...tasksFetched[index]];
                        tasksFetched[index] = [];
                        tasksFetched[2] = temp;
                    }
                }
            });

        setTasks(tasksFetched);

    }, []);

    useEffect(() => {
        window.localStorage.setItem('Days_Tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleActive = (activateButton) => {
        setActive(activateButton);
    };

    const removeTask = (index) => {
        const tasksCpy = [...tasks];
        const taskArr = tasksCpy[active];
        taskArr.splice(index, 1);
        taskArr.forEach((task, ind) => {
            task.indexToMap = ind;
        });

        setTasks(tasksCpy);
    };

    const hideTaksWindow = (e, added) => {
        if (added || e.target.getAttribute('id') === 'overlay') setShowAddWindow(false);
    };

    const markTaskCompleted = (index) => {
        const taskCpy = [...tasks];
        const taskArr = taskCpy[active];

        taskArr[index].isCompleted = true;
        setTasks(taskCpy);
    };

    const openTaskWindow = () => setShowAddWindow(true);

    const addTask = (taskName, description, index) => {
        hideTaksWindow('', true);

        const tasksCpy = [...tasks];
        const taskArr = tasksCpy[index];

        const dateAdded = new Date();
        if (index === 2) dateAdded.setDate(dateAdded.getDate() + 1);
        if (taskName.length || description.length) taskArr.push({ taskName, description, indexToMap: taskArr.length, isCompleted: false, dateAdded });

        setTasks(tasksCpy);
    };

    return (
        <>
            <div
                id="task-section"
                className="animate__animated animate__bounceIn m-auto flex h-full w-full flex-col items-center gap-2 rounded-t-[25px] border-[1px] border-red-400 bg-red-200 p-6 drop-shadow-[-10px_20px_10px_rgba(0,0,0,0.25)] transition-all duration-500 md:min-h-[485px] md:w-2/3 md:max-w-[700px] md:rounded-[50px]">
                
                <AddTaskButton handleTasks={openTaskWindow} />
                <ToggleDaysMenu active={active} handleActive={handleActive} />
                <TaskArea removeTask={removeTask} markTaskCompleted={markTaskCompleted} task={tasks[active]} />

            </div>

            {showAddWindow && <AddTaskWindow hideTaksWindow={hideTaksWindow} handleActive={handleActive} addTask={addTask} />}
        </>
    );
}
