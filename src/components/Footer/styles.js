import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';

const FooterContainer = styled.footer`
    background: #dadada;
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding: 102px 0px;
    border-top: 1px solid #a1a1a1;
`;

const Award = styled.div`
    background: #a2a2a2;
    width: 70px;
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

export {
    FooterContainer,
    Award,
    AwardsContainer,
    AwardsWrapper
}
