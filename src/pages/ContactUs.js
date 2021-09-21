import React from "react";

//Animation
import { motion } from 'framer-motion';
import { PageAnimation, titleanim } from '../components/animation';
import styled from "styled-components";

const ContactUs = () => {
    return (
        <ContactStyle
            variants={PageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: '#fff' }}>

            <Title>
                <Hide>
                    <motion.h2 variants={titleanim}>
                        Get in touch.
                    </motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleanim}>
                        <Circle />
                        <h2>Send us a message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleanim}>
                        <Circle />
                        <h2>Send an e-mail</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleanim}>
                        <Circle />
                        <h2>Social Media</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media(max-width: 1500px){
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
}
`

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
`

const Hide = styled.div`
    overflow: hidden;
`

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
        @media(max-width: 1500px){
            font-size: 3rem;
}
    }
`

export default ContactUs;