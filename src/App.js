import Footer from './components/footer';
import Header from './components/header';
import UserInput from './components/userInput';
import './styles/style.sass';

function App() {
    return (
        <div>
            <Header />
            <div className="container pt-24">
                <UserInput />
            </div>
            <Footer />
        </div>
    );
}

export default App;
