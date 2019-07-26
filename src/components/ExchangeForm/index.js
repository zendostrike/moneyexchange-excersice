import React, { useState } from "react";

import {
    Input,
    FormItem,
    Button,
    InputsContainer
} from "./styles";

import { nonNumericRegex, currencyFormatter, currencyToFloat } from "./helper";

const ExchangeForm = ({ exchangeRate }) => {
    const [sourceAmount, setSourceAmount] = useState("");
    const [resultAmount, setResultAmount] = useState("");

    return (
        <div>
            <InputsContainer>
                <FormItem>
                    <Input
                        type="text"
                        onChange={({ target }) => {
                            const strAmount = target.value;
                            
                            if (strAmount[0] && strAmount[0].match(nonNumericRegex)) {
                                strAmount.substr(1);
                            }

                            if (strAmount[strAmount.length - 1] === ".") {
                                setSourceAmount(strAmount);
                                return;
                            }

                            const formattedResult = currencyFormatter(strAmount);

                            setSourceAmount(`$${formattedResult}`);
                        }}
                        value={sourceAmount}
                        placeholder="USD"
                    />
                </FormItem>
                <FormItem>
                    <Input value={resultAmount} type="text" placeholder="EU" disabled />
                </FormItem>
            </InputsContainer>
            <InputsContainer>
                <FormItem>
                    <Button
                        onClick={() => {
                            let strSourceAmount = sourceAmount;
                            if (strSourceAmount.match(nonNumericRegex)) {
                                strSourceAmount = sourceAmount.substr(1);
                            }

                            const floatValue = currencyToFloat(strSourceAmount);
                            const convertedAmount = floatValue * parseFloat(exchangeRate);

                            const formattedResult = currencyFormatter(convertedAmount.toString());
                            setResultAmount(`€${formattedResult}`);
                        }}
                    >
                            Calculate
                    </Button>
                </FormItem>
            </InputsContainer>
        </div>
    );
}

export default ExchangeForm;

