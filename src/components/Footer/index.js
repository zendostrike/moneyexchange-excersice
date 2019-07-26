import React from "react";
import {
    FooterContainer,
    AwardsContainer,
    Award,
    AwardsWrapper
} from "./styles";

const Header = () => (
    <FooterContainer>
        <AwardsWrapper>
            <AwardsContainer>
                <Award />
                <Award />
                <Award />
                <Award />
            </AwardsContainer>
        </AwardsWrapper>
    </FooterContainer>
);

export default Header;