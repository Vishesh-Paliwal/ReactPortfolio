// import './SkillCard.css'
// function skillCard({Text , img}){
//     return <div id='skillpar'>
//         <div id='imgdiv'><img src={img} alt='x'></img></div>
//         <div id='skillchild'>{Text}</div>
//     </div>
// }

// export default skillCard;

import { motion } from 'framer-motion';
import './SkillCard.css';

function SkillCard({ Text, img }) {
    return (
        <motion.div 
            id='skillpar'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.5 }}
        >
            <motion.div 
                id='imgdiv'
                whileHover={{ rotate: 30 }}
            >
                <img src={img} alt='x' />
            </motion.div>
            <motion.div 
                id='skillchild'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0, duration: 1.5 }}
            >
                {Text}
            </motion.div>
        </motion.div>
    );
}

export default SkillCard;
