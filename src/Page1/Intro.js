import GithubImg from "../Assets/github.svg"
import LinkedinImg from "../Assets/linkedin.svg"
import Avatar from "../Assets/avatar.svg"
import Typewriter from 'typewriter-effect'

function intro(){
    return <div id="intro">
        <img id="pic" src={Avatar} alt="profile pic"></img>
        <p id="name1">HI , MY NAME IS <span>VISHESH PALIWAL</span></p>
        <div id="wrap"><p id="im">I am a <Typewriter
            options={{
                strings: ['DEVELOPER', 'COMPETITIVE CODER' ,'TECH ENTHUSIAST'],
                autoStart: true,
                loop: true,
                wrapperClassName: "st"
            }}
            />
            </p></div>
        <div>
            <a href="https://www.linkedin.com/in/vishesh-paliwal-42764b2ab/"><img className="log" src={LinkedinImg} alt="linkedin"></img></a>
            <a href="https://github.com/Vishesh-Paliwal"><img className="log" src={GithubImg} alt="github "/></a>
        </div>
    </div>
}

export default intro;