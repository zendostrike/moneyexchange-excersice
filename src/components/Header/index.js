import React from "react";
import {
    HeaderContainer,
    Logo,
    LogoContainer,
    AwardsContainer,
    Award,
    AwardsWrapper,
    WelcomeMesssage
} from "./styles";

import { MSG_WELCOME } from "./constants";

const Header = () => (
    <HeaderContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <WelcomeMesssage>
            {MSG_WELCOME}
        </WelcomeMesssage>
        <br />
        <AwardsWrapper>
            <AwardsContainer>
                <Award />
                <Award />
                <Award />
                <Award />
            </AwardsContainer>
        </AwardsWrapper>
    </HeaderContainer>
);

export default Header;