import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Intrest from './IntrestCard';
import './About.css';
import Avatar from "../Assets/avatar.svg";
import { useEffect, useState } from 'react';

function About() {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    };

    const dragConstraints = {
        top: -500,
        left: 0,
        right: 500,
        bottom: 0,
    };

    return (
        <div>
            <div id='ab'>ABOUT</div>
            <div id='par'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                ></motion.div>
                <img id='profileimg' src={Avatar} alt="self-img" />
                <div id='txt'>
                    <motion.p
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        I'm Vishesh, a passionate software developer. I specialize in Web Development, crafting seamless user experiences and robust backend solutions. With a knack for problem-solving, I thrive on creating elegant code that makes an impact. I'm always exploring new tools and techniques to stay at the forefront of the ever-evolving tech landscape.
                    </motion.p>
                    <motion.p
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        Open to collaborations and exciting projects, I'm eager to connect with fellow developers and tech enthusiasts. Let's build something amazing together! Happy coding!
                    </motion.p>
                </div>
            </div>
            <h2>Interests :</h2>
            <div id='AllCards'>
                <motion.div
                    drag={!isMobile}
                    dragConstraints={dragConstraints}
                >
                    <Intrest text="Software Engineering" />
                </motion.div>
                <motion.div
                    drag={!isMobile}
                    dragConstraints={dragConstraints}
                >
                    <Intrest text="Web-Development" />
                </motion.div>
                <motion.div
                    drag={!isMobile}
                    dragConstraints={dragConstraints}
                >
                    <Intrest text="Competitive Programming" />
                </motion.div>
                <motion.div
                    drag={!isMobile}
                    dragConstraints={dragConstraints}
                >
                    <Intrest text="Web-Scraping" />
                </motion.div>
                <motion.div
                    drag={!isMobile}
                    dragConstraints={dragConstraints}
                >
                    <Intrest text="Data Analysis" />
                </motion.div>
                <motion.div
                    drag={!isMobile}
                    dragConstraints={dragConstraints}
                >
                    <Intrest text="Visualization" />
                </motion.div>
            </div>
        </div>
    );
}

export default About;
