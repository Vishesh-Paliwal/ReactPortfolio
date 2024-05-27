import './Page1.css'
import Nav from '../NavBar/Nav';
import Intro from './Intro'
function page(){
    return <div id='page1'>
         <video autoPlay muted loop id="myVideo">
                <source src={require('./back.mov')} type="video/mp4" />
        </video>
        <Nav></Nav>
        <Intro></Intro>
    </div>
}

export default page;