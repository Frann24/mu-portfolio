import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About'
import Skill from './components/Skill/Skill';
import Projects from './components/Project/Projects';
import Modal from './components/modal/Modal';


function App() {
  return (
    <div id='home' className="App">
      <Header/>     
      <main>
        
        <Home />
        <div id='about'></div>
        <About/>
        <Skill/>
        <div id='projects'></div>
        <Projects/>
      </main>
      <Modal/>
    </div>
  );
}

export default App;
