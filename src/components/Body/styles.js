import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';

const BodyContainer = styled.section`
    padding: 45px 0px 25px 0px;
    background: #dadada;
    border-top: 2px solid #a1a1a1;
    border-bottom: 2px solid #a1a1a1;
    ${breakpoint('tablet')`
        padding: 85px 0px 25px 0px;
    `}
`;

export { BodyContainer }
