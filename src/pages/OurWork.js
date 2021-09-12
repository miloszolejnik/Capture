import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

//Animation
import { motion } from 'framer-motion';
import { PageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../components/animation';
import { useScroll } from '../components/UseScroll';

const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Work
            variants={PageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: '#fff' }}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider} />
                <Frame2 variants={slider} />
                <Frame3 variants={slider} />
                <Frame4 variants={slider} />
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>
                    Athlete
                </motion.h2>
                <motion.div className="line" variants={lineAnim}></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element} variants={fade} animate={controls} initial="hidden">
                <h2>The Theracer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>
                        <motion.img variants={photoAnim} src={theracer} alt="theracer" />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                        <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
                    </Hide>
                </Link>
            </Movie>
        </Work >
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
    @media(max-width: 1300px){
        padding: 2rem 2rem;
}
`
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23dd97;
        margin-bottom: 3rem;
    }
        img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const Hide = styled.div`
    overflow: hidden;
`

//Frame Animation

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    height: 100vh;
    width: 100%;
    background: #fffebf;
    z-index: 2;
`

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`

export default OurWork;