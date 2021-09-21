import React from 'react';
import home1 from '../img/home1.png';
import { About, Disc, Image, Hide } from '../style';
import { titleanim, fade, photoAnim } from './animation';
import Wave from "./Wave";
import ScrollTop from './ScrollTop';

//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <About>
            <Disc>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleanim}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleanim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleanim}>
                            true.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us fro any photograpyhy or vieography ideas that you have. We have professionals with amazign skills to help you achieve it
                </motion.p>
                <motion.button variants={fade}>
                    Contact Us
                </motion.button>
            </Disc>
            <Image>
                <motion.img src={home1} variants={photoAnim} alt="Guy with the camera" />
            </Image>
            <Wave />
            <ScrollTop />
        </About>
    )
}

export default AboutSection;