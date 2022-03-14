import logo from './logo.svg';
import './App.css';
import PersonCard from './components/personCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={ 48 } hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" />
      <PersonCard firstName="Micheal" lastName="Jordan" age={ 63 } hairColor="Black" />
      <PersonCard firstName="Larry" lastName="Bird" age={ 68 } hairColor="Ash Blonde" />
    </div>
  );
}

export default App;
