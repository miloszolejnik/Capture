import React from 'react';
//Import Icons
import cloak from '../img/clock.svg';
import diaphgram from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Styles
import styled from 'styled-components';
import { About, Disc, Image } from '../style';
//Animations
import { scrollReveal } from "./animation"
import { useScroll } from './UseScroll'

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <Disc>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={cloak} alt="icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>TeamWork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphgram} alt="icon" />
                            <h3>Diaphgram</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Disc>
            <Image>
                <img src={home2} alt="Camera" />
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding-top: 2rem 0rem 4rem 0rem;
    }
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media(max-width: 1300px){
    justify-content: center;
}
`;
const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: .5rem;
        }
    }
`

export default ServicesSection;