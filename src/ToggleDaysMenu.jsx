import ToggleDayButton from './ToggleDayButton';

export default function ToggleDaysMenu({ active, handleActive }) {
    return (
        <>
            <ul className="relative grid w-full place-items-center gap-2 text-xl text-white md:flex md:justify-evenly">
                <ToggleDayButton day={'Yesterday'} index={0} active={active} handleActive={() => handleActive(0)} />
                <ToggleDayButton day={'Today'} index={1} active={active} handleActive={() => handleActive(1)} />
                <ToggleDayButton day={'Tommorrow'} index={2} active={active} handleActive={() => handleActive(2)} />
            </ul>
            <hr className="mt-4 h-[2px] w-full bg-white" />
        </>
    );
}
