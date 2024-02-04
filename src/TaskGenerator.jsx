import delIcon from './assets/svg/delete.svg';
import completed from './assets/svg/completed.svg';
import 'animate.css';

export default function TaskGenerator({ taskName, description, removeTask, markTaskCompleted, indexToMap, isCompleted, first, last }) {
    return (
        <li
            value={indexToMap}
            className={`animate__animated animate__bounceIn relative my-2  grid w-full place-items-center transition-all duration-300 bg-white p-4 font-[task] text-xl font-bold shadow-[-5px_5px_0px_rgba(0,0,0,0.3)] ${isCompleted && 'blur-sm'} ${first && 'rounded-t-3xl'} ${last && 'rounded-b-3xl'}`}>
            <div className="grid min-h-32 w-2/3 items-center  overflow-hidden p-4 text-center">
                <h1 className="text-red-500 ">{taskName}</h1>
                <hr className="mx-auto w-1/2 border-2 bg-white drop-shadow-2xl" />
                <p className="mt-4 text-gray-600">{description}</p>
            </div>

            <div className="flex gap-5">
                <button onClick={() => markTaskCompleted(indexToMap)} className="h-8 w-8 -skew-x-3  rounded-lg bg-white/20">
                    <img className="mx-auto h-7 fill-red-500" src={completed} alt="mark completed icon" />
                </button>

                <button onClick={() => removeTask(indexToMap)}>
                    <img className="mx-auto h-7 fill-red-500" src={delIcon} alt="delete icon" />
                </button>
            </div>
        </li>
    );
}
