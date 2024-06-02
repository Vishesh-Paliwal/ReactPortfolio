import './App.css';
import Page1 from './Page1/Page1'
// import About from './Page2/About'
import Skill from './Page3/Skills'
import Exper from './Page4/Experience'
import Cont from './Page5/Contact'
import Nav from './NavBar/Nav'
import Page2 from './Page2/Page2'

function App() {
  return (
    <div className="App">
        <Nav></Nav>
        <Page1></Page1>
        <br></br>
        <Page2></Page2>
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
