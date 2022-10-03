import styled from "styled-components";

export const FormBox = styled.div`
    width: 365px;
    height: 440px;
    margin: 0 auto;
    background-color: #F5F5F5;
    border-radius: 12px;
    transform: translateY(90%);
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: -70px;
    left: 40%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

export const FormInput = styled.input`
    width: 278px;
    height: 24px;
    background-color: inherit;
    border: none;
    border-bottom: 1px solid #D0CECE;
    padding: 8px 0px;
    box-sizing: border-box;
    
    &::placeholder {
        font-family: inherit;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #D0CECE;
    }

    &:focus {
        outline: none;
    }
`

export const LogoImg = styled.img`
    width: 140px;
    height: 21px;
    margin-bottom: 40px;
`

export const ButtonBox = styled.div`
    margin-top: 40px;
`