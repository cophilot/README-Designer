import Header from './components/header';
import UserInput from './components/userInput';
import './style.sass';

function App() {
    return (
        <div>
            <Header />
            <div className="container pt-24">
                <UserInput />
            </div>
        </div>
    );
}

export default App;
