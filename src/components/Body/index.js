import React from "react";
import {
    BodyContainer
} from "./styles";
import ExchangeForm from "../ExchangeForm";

const Body = ({ exchangeRateData }) => (
    <BodyContainer>
        {exchangeRateData ? (
            <ExchangeForm exchangeRate={exchangeRateData.quotes.USDEUR} />
        ) : <div>Loading exchange rate...</div>}
    </BodyContainer>
);

export default Body;
