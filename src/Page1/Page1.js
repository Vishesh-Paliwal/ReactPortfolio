import './Page1.css'
import Intro from './Intro'
function page(){
    return <div id='page1'>
         <video autoPlay muted loop id="myVideo">
                <source src={require('../Assets/back.mov')} type="video/mp4" />
        </video>
        <Intro></Intro>
    </div>
}

export default page;