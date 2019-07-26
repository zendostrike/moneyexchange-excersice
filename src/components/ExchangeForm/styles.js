import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';

const Input = styled.input`
    border: none;
    width: 100%;
    height: 35px;
    text-align: center;
    font-weight: bold;

    ${breakpoint('tablet')`
        height: 30px;
        width: 275px;
    `}
`;

const Button = styled.button`
    border: none;
    width: 100%;
    height: 45px;
    background: #c2c2c2;

    ${breakpoint('tablet')`
        width: 250px;
    `}
`;

const FormItem = styled.div`
    padding: 6px 0px;
    ${breakpoint('tablet')`
        padding: 6px 20px;
    `}
`;

const InputsContainer = styled.div`
    padding: 12px 0px;
    ${breakpoint('tablet')`
        display: flex;
        justify-content: center;
    `}
`;

export {
    Input,
    FormItem,
    Button,
    InputsContainer
}
