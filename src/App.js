import './App.css';
import Header from './Components/Header/Header';
import Shopping from './Components/Shopping/Shopping';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <h2>Watch all you needs available here</h2>
     <h3>Select up to four watch</h3>
     <Shopping></Shopping>
    </div>
  );
}

export default App;
