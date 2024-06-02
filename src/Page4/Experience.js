import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './exp.css';
import taimg from '../Assets/ta.png';

function Exper() {
    const controls = useAnimation();
    const textControls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                scale: 1,
                translateX: '0%',
                transition: { duration: 2, ease: 'easeOut' },
            });
            textControls.start({
                opacity: 1,
                translateX: '0%',
                transition: { duration: 2, ease: 'easeOut' },
            });
        }
    }, [controls, textControls, inView]);

    return (
        <div id='page4'>
            <motion.h2
                initial={{ opacity: 0, translateX: '-10%' }}
                animate={textControls}
                ref={ref}
            >
                <h2>EXPERIENCE</h2>
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, translateX: '-100%' }}
                animate={textControls}
                ref={ref}
            >   
                <div id='exp'>
                <h3>SCALER SCHOOL OF TECHNOLOGY</h3>
                <p>April 2024 - Present</p>
                <h3 id='ta'>TEACHING ASSISTANT</h3>
                <p>I work as a Teaching Assistant, where I get to interact with students and help them with the topics in DSA</p>
                </div>
            </motion.div>
            <div id='fl'>
                <motion.img
                    alt='x'
                    src={taimg}
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.5, translateX: '-50%' }}
                    animate={controls}
                    style={{ borderRadius: '600px 1400px 1000px 590px' }}
                />
            </div>
        </div>
    );
}

export default Exper;
