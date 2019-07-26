import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';

const HeaderContainer = styled.header`
    padding: 25px 0px;
    background: #fff;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Logo = styled.div`
    background: #dadada;
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;

const Award = styled.div`
    background: #dadada;
    width: 55px;
    height: 18px;
    ${breakpoint('tablet')`
        width: 100px;
        height: 20px;
    `}
    
    ${breakpoint('desktop')`
        width: 120px;
        height: 23px;
    `}
`;

const AwardsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    ${breakpoint('desktop')`
        justify-content: space-between;
    `}
`;

const AwardsWrapper = styled.div`
    margin: 0 auto;
    max-width: 100%;
    ${breakpoint('desktop')`
        max-width: 560px;
    `}
`;

const WelcomeMesssage = styled.p`
    text-align: center;
    font-family: monospace;
`;

export {
    HeaderContainer,
    Logo,
    LogoContainer,
    Award,
    AwardsContainer,
    AwardsWrapper,
    WelcomeMesssage
}
