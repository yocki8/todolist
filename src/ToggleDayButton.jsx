import 'animate.css';

export default function ToggleDayButton({ day, index, active, handleActive }) {
    return (
        <li>
            <button
                onClick={handleActive}
                className="relative grid place-items-center overflow-hidden rounded-3xl bg-red-500/50 px-5 py-2 shadow-[inset_-5px_10px_8px_rgba(0,0,0,0.25)]">
                <span
                    className={
                        'animate__animated absolute  h-4/5 w-[90%] rounded-full bg-white/60  blur-[4px] backdrop-blur-2xl ' +
                        (active === index ? 'animate__bounceIn' : 'animate__bounceOut')
                    }></span>
                <h1 className="font-[todo]  text-2xl drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.25)]">{day}</h1>
            </button>
        </li>
    );
}
