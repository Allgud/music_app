import styled from "styled-components";

export const PlayList = styled.ul`
    position: absolute;
    height: 70vh;
    top: 100px;
    left: 0;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`