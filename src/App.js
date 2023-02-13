import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About'
import Skill from './components/Skill/Skill';

function App() {
  return (
    <div className="App">
      <Header/>     
      <main>
        <Home/>
        <About/>
        <Skill/>
      </main>
    </div>
  );
}

export default App;
