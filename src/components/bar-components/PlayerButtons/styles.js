import styled from "styled-components";

const Btn = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
`

export const PrevBtn = styled(Btn)`
    margin-right: 23px;
` 

export const NextBtn = styled(Btn)`
    margin-right: 28px;
    fill: #a53939;
`

export const PlayBtn = styled(Btn)`
    margin-right: 23px;
`

export const RepeatBtn = styled(Btn)`
    margin-right: 24px;
`

export const ShuffleBtn = styled(Btn)`
    display: flex;
    align-items: center;
`

export const VolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`