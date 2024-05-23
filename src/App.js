import './App.css';
import Nav from './Nav'
import Intro from './Intro'
import About from './About'
import Skill from './Skills'
import Exper from './Experience'
import Cont from './Contact'

function App() {
  return (
    <div className="App">
        <Nav/>
        <br></br>
        <Intro/>
        <br></br>
        <About/>
        <br></br>
        <Skill/>
        <br></br>
        <Exper/>
        <br></br>
        <Cont/>
    </div>
  );
}

export default App;
