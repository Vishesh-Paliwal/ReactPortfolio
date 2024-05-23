import Intrest from './IntrestCard'

function about(){
    return <div>
        <div>ABOUT</div>
        <div>
            <img alt="self-img"></img>
            <p>I'm Vaheed, a passionate software developer. I specialize in Web Development, crafting seamless user experiences and robust backend solutions. With a knack for problem-solving, I thrive on creating elegant code that makes an impact. I'm always exploring new tools and techniques to stay at the forefront of the ever-evolving tech landscape.</p>
            <p>Open to collaborations and exciting projects, I'm eager to connect with fellow developers and tech enthusiasts. Let's build something amazing together!Happy coding!</p>   
        </div>
        <h2>Intrests :</h2>
        <div>
            <Intrest text="Software Engenering"/>
            <Intrest text="Web-Development"/>
            <Intrest text="Competitive Proagraming"/>
            <Intrest text="Web Scraping"/>
        </div>
    </div>
}

export default about;