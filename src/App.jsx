import CreateTaskSection from './CreateTaskSection';
import TodoLogo from './assets/images/todoLogo.png';
import 'animate.css';
import './App.css';

function Logo() {
    const handleLogoClick = (e) => {
        e.target.classList.remove('animate__rubberBand');
        setTimeout(() => e.target.classList.add('animate__rubberBand'), 50);
    };

    return <img src={TodoLogo} className="animate__animated animate__rubberBand mx-auto mb-5 h-40" onMouseEnter={handleLogoClick}></img>;
}
function App() {
    return (
        <div
            id="overl"
            className="min-h-dvh animate-[gradient_1s_ease_infinite] overflow-hidden bg-gradient-to-tr from-red-300 via-red-400 to-red-500 bg-[length:500%] object-fill pt-5">
            <Logo />
            <CreateTaskSection />
        </div>
    );
}

export default App;
