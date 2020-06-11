import React from 'react';
import styled from 'styled-components';
import { Title, SubTitle } from '../atoms/Headers';
import building1Img from "../../images/building-1.svg";
import building2Img from "../../images/building-2.svg";
import building3Img from "../../images/building-3.svg";
import building4Img from "../../images/building-4.svg";
import building5Img from "../../images/building-5.svg";
import building6Img from "../../images/building-6.svg";
import building7Img from "../../images/building-7.svg";
import building8Img from "../../images/building-8.svg";
import building9Img from "../../images/building-9.svg";
import rizalMonumentImg from "../../images/rizal-monument.svg";
import billboard1Img from "../../images/billboard-1.svg";
import billboard2Img from "../../images/billboard-2.svg";
import billboard3Img from "../../images/billboard-3.svg";
import billboard4Img from "../../images/billboard-4.svg";
import moaImg from "../../images/moa.svg";

const LandingContainer = styled.div `
    width: 100vw;
    height: 100vh;
`

const TitleContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
`

const BackgroundContainer = styled.div `
    height: 100%;
`

const FloorImgContainer = styled.div `
    background-color: #ADC5E7;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 35%;
    position: absolute;
    z-index: 0;
`

const SkylineImgContainer = styled.div `
    position: relative;
    height: 65%;
    z-index: -1;
`
const BuildingGroup1Container = styled.div `
    position: absolute;
    bottom: -13px;
    margin-left: 0;
`
const BuildingGroup2Container = styled.div `
    position: absolute;
    bottom: -13px;
    margin-left: 50%;
`
const Building1ImgContainer = styled.div `
    position: absolute;
    left: 0px;
    bottom: -13px;
    width: 120px;
    z-index: 1;
`
const Building2ImgContainer = styled.div `
    position: absolute;
    bottom: -35px;
    width: 50px;
    z-index: 1;
    margin-left: 155px;
`
const Building3ImgContainer = styled.div `
    position: absolute;
    margin-left: 210px;
    bottom: -87px;
    width: 142px;
    z-index: 1;
`
const Building4ImgContainer = styled.div `
    position: absolute;
    margin-left: 29%;
    bottom: -60px;
    width: 114px;
    z-index: 1;
`
const Building5ImgContainer = styled.div `
    position: absolute;
    bottom: -13px;
    width: 75px;
    z-index: 1;
`
const Building6ImgContainer = styled.div `
    margin-left: 51px;
    position: absolute;
    bottom: -13px;
    width: 101px;
    z-index: 2;
`
const Building7ImgContainer = styled.div `
    position: absolute;
    margin-left: 75px;
    bottom: -31px;
    width: 174px;
    z-index: 1;
`
const Building8ImgContainer = styled.div `
    position: absolute;
    margin-left: 73.4%;
    bottom: -13px;
    width: 165px;
    z-index: 1;
`
const Building9ImgContainer = styled.div `
    position: absolute;
    bottom: -13px;
    width: 125px;
    right: 0;
    z-index: 1;
`
const RizalImgContainer = styled.div `
    position: absolute;
    left: 30px;
    bottom: -18px;
    width: 62px;
    z-index: 2;
`

const MoaImgContainer = styled.div `
    position: absolute;
    left: 98px;
    bottom: -56px;
    width: 250px;
    z-index: 2;
`
const Billboard1ImgContainer = styled.div `
    position: absolute;
    bottom: -27px;
    width: 67px;
    margin-left: 130px;
    z-index: 4;
`

const Billboard2ImgContainer = styled.div `
    position: absolute;
    bottom: 17px;
    width: 200px;
    margin-left: 230px;
    z-index: 4;
`
const Billboard3ImgContainer = styled.div `
    position: absolute;
    bottom: -13px;
    width: 100px;
    margin-left: 53%;
    z-index: 4;
`
const Billboard4ImgContainer = styled.div `
    position: absolute;
    bottom: 13px;
    width: 100px;
    margin-left: 111px;
    z-index: 3;
`
const DescriptionContainer = styled.div `

`

const Landing = (props) => {

    return(
        <LandingContainer>
            <BackgroundContainer>
                <SkylineImgContainer>
                    <BuildingGroup1Container>
                        <RizalImgContainer>
                            <img src={rizalMonumentImg} />
                        </RizalImgContainer>
                        <MoaImgContainer>
                            <img src={moaImg} />
                        </MoaImgContainer>
                        <Building1ImgContainer>
                            <img src={building1Img} />
                        </Building1ImgContainer>
                        <Building2ImgContainer>
                            <img src={building2Img} />
                        </Building2ImgContainer>
                        <Building3ImgContainer>
                            <img src={building3Img} />
                        </Building3ImgContainer>
                        <Billboard1ImgContainer>
                            <img src={billboard1Img} />
                        </Billboard1ImgContainer>
                        <Billboard2ImgContainer>
                            <img src={billboard2Img} />
                        </Billboard2ImgContainer>
                    </BuildingGroup1Container>
                    <Building4ImgContainer>
                        <img src={building4Img} />
                    </Building4ImgContainer>
                    <BuildingGroup2Container>
                        <Building5ImgContainer>
                            <img src={building5Img} />
                        </Building5ImgContainer>
                        <Building6ImgContainer>
                            <img src={building6Img} />
                        </Building6ImgContainer>
                        <Building7ImgContainer>
                            <img src={building7Img} />
                        </Building7ImgContainer>
                        <Billboard3ImgContainer>
                            <img src={billboard3Img} />
                        </Billboard3ImgContainer>
                        <Billboard4ImgContainer>
                            <img src={billboard4Img} />
                        </Billboard4ImgContainer>
                    </BuildingGroup2Container>
                    <Building8ImgContainer>
                        <img src={building8Img} />
                    </Building8ImgContainer>
                    <Building9ImgContainer>
                        <img src={building9Img} />
                    </Building9ImgContainer>
                </SkylineImgContainer>
                <FloorImgContainer>
                    {/* <Img fluid={data.floorImg.childImageSharp.fluid} /> */}
                </FloorImgContainer>
            </BackgroundContainer>
            {/* <TitleContainer>
                <Title>Justin Sian</Title>
                <DescriptionContainer>
                    <Image />
                    <SubTitle>Software Engineer</SubTitle>
                </DescriptionContainer>
            </TitleContainer> */}
        </LandingContainer>
    );
}

export default Landing;