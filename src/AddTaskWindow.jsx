import { useState } from 'react';

export default function AddTaskWindow({ hideTaksWindow, handleActive, addTask }) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');


    const handleTaskName = (e) => {
        setTaskName(e.target.value);
    };
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const userEntered = (e) => {
        if (e.key == 'Enter') {
            handleActive(1);
            addTask(taskName, description, 1);
        }
    };
    return (
        
        <div
            id="overlay"
            className=" fixed top-0 grid h-full w-full place-items-center bg-black/40 backdrop-blur-md"
            onClick={hideTaksWindow}
            onKeyDown={userEntered}>
            <div className="grid h-52 w-96 rounded-2xl bg-[#e5e6e5] p-5 shadow-[-10px_10px_10px_rgba(0,0,0,0.6)]">
                <fieldset className="grid gap-2">
                    <input autoFocus placeholder="Task name" onKeyUp={handleTaskName} className="w-2/3 rounded-t-xl p-2" />
                    <input type="text" onKeyUp={handleDescription} className="rounded-b-xl p-2" placeholder="description..." />
                </fieldset>
                <div className="flex h-full items-center justify-evenly">
                    <button
                        onClick={() => {
                            handleActive(1);
                            addTask(taskName, description, 1);
                        }}
                        className="rounded-xl bg-gradient-to-b from-blue-200 to-black/60 px-5 py-2 text-white hover:from-blue-400 hover:to-black">
                        Today
                    </button>
                    <button
                        onClick={() => {
                            handleActive(2);
                            addTask(taskName, description, 2);
                        }}
                        className="rounded-xl bg-gradient-to-b from-blue-200 to-black/60 px-5 py-2 text-white hover:from-blue-400 hover:to-black">
                        Tommorrow
                    </button>
                </div>
            </div>
        </div>
    );
}
