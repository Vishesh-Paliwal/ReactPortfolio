import SkillCard from './SkillCard'
import htmlimg from '../Assets/html.svg'
import cssimg from '../Assets/css-16-svgrepo-com.svg'
import jsimg from '../Assets/javascript-16-svgrepo-com.svg'
import bootimg from '../Assets/bootstrap-fill-svgrepo-com.svg'
import jqimg from '../Assets/jquery-svgrepo-com.svg'
import reactimg from '../Assets/react-svgrepo-com.svg'
import javaimg from '../Assets/java-svgrepo-com.svg'
import springimg from '../Assets/spring-svgrepo-com.svg'
import pyimg from '../Assets/python-127-svgrepo-com.svg'
import gitimg from '../Assets/git-svgrepo-com.svg'
import githubimg from '../Assets/github.svg'
import postimg from '../Assets/postman-svgrepo-com.svg'
import mysqlimg from '../Assets/mysql-svgrepo-com.svg'
import linuximg from '../Assets/linux-svgrepo-com.svg'
import bashimg from '../Assets/terminal-bash-svgrepo-com.svg'
import kotlinimg from '../Assets/kotlin-16-svgrepo-com.svg'
import './Skills.css'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect  } from 'react';
import { useInView } from 'react-intersection-observer';

function Skill(){
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    };


    return <div id='page3'>
        <motion.p
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        <h2 id='title'>SKILLS :</h2>
                    </motion.p>
        
        <div id='skillset'>
        <SkillCard Text="HTML" img={htmlimg}/>
        <SkillCard Text="CSS"img={cssimg}/>
        <SkillCard Text="JavaScript" img={jsimg}/>
        <SkillCard Text="Jquery" img={jqimg}/>
        <SkillCard Text="Bootstrap" img={bootimg}/>
        <SkillCard Text="React" img={reactimg}/>
        <SkillCard Text="JAVA" img={javaimg}/>
        <SkillCard Text="Spring" img={springimg}/>
        <SkillCard Text="Python" img={pyimg}/>
        <SkillCard Text="git" img={gitimg}/>
        <SkillCard Text="github" img={githubimg}/>
        <SkillCard Text="Postman"img={postimg}/>
        <SkillCard Text="Mysql"img={mysqlimg}/>
        <SkillCard Text="Kotlin"img={kotlinimg}/>
        <SkillCard Text="Linux"img={linuximg}/>
        <SkillCard Text="Bash"img={bashimg}/>
        </div>
    </div>
}

export default Skill;