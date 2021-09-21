import React from 'react';

//Page Components
import AbputSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

//Animation
import { motion } from 'framer-motion';
import { PageAnimation } from '../components/animation';

const AboutUs = () => {
    return (
        <motion.div
            variants={PageAnimation} initial="hidden" animate="show" exit="exit">
            <AbputSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
}

export default AboutUs;