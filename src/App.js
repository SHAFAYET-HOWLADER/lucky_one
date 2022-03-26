import './App.css';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';
import Shopping from './Components/Shopping/Shopping';
function App() {
  return (
    <div className="App">
     <Header></Header>
       <div className="products_header">
       <h2>Watch all you needs available here</h2>
       <h3>Select up to four watch</h3>
       </div>
     <Shopping></Shopping>
     <Question></Question>
    </div>
  );
}

export default App;
