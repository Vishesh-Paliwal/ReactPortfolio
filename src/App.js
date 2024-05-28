import './App.css';
import Page1 from './Page1/Page1'
import About from './About'
import Skill from './Skills'
import Exper from './Experience'
import Cont from './Contact'
import Nav from './NavBar/Nav'

function App() {
  return (
    <div className="App">
        <Nav></Nav>
        <Page1></Page1>
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
