import './page5.css'
import Contcard from './ContactCard'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect  } from 'react';
import { useInView } from 'react-intersection-observer';
function Cont(){
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
    return <div id='page5'>
          <motion.p
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        <h1 id='discuss'>Lets Discuss on Something <span>Cool</span> Together</h1>
                    </motion.p>
        <div id='contacard'><Contcard/></div>
    </div>
}

export default Cont;