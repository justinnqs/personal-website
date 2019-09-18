import React from 'react';
import LandingTemplate from '../components/templates/LandingTemplate';
import { Title, SubTitle } from '../components/atoms/Headers';

const Landing = (props) => {
    return(
        <LandingTemplate>
            <Title>Justin Sian</Title>
            <SubTitle>Software Engineer</SubTitle>
        </LandingTemplate>
    );
}

export default Landing;