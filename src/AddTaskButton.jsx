export default function AddTaskButton({ handleTasks }) {
    return (
        <div className="w-full grid place-items-center">
            <button onClick={handleTasks} className="relative  animate__animated my-3 h-16 w-[40%] -translate-x-3  md:w-44">
                <div className="absolute grid h-16 w-full -translate-y-2 translate-x-2 place-items-center rounded-xl bg-red-50/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:translate-x-3 hover:scale-105 hover:bg-red-300/40 active:bg-red-500/40">
                    <h1 className="font-[myFont] text-2xl font-bold text-red-50 ">ADD TASK</h1>
                </div>
                <span className=" block h-16 w-full rounded-2xl bg-red-400"></span>
            </button>
        </div>
    );
}

