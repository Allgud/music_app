import styled from "styled-components";

const Button = styled.button`
    width: 278px;
    height: 52px;
    border-radius: 6px;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
`

export const EnterButton = styled(Button)`
    background: #580EA2;
    color: #${props => props.theme.color};
    margin-bottom: 20px;
`

export const SignUpButton = styled(Button)`
    color: ${(props) => props.$flag ? '#000000' : '#${props => props.theme.color}'};
    background: ${(props) => props.$flag ? '#${props => props.theme.color}' : '#580EA2'};
`