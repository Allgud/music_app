import styled from "styled-components";

const Btn = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
`

export const PrevBtn = styled(Btn)`
    margin-right: 23px;
`

export const PrevBtnSvg = styled.svg`
    width: 15px;
    height: 14px;
`

export const NextBtn = styled(Btn)`
    margin-right: 28px;
    fill: #a53939;
`

export const NextBtnSvg = styled.svg`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #D9D9D9;
`

export const PlayBtn = styled(Btn)`
    margin-right: 23px;
`

export const PlayBtnSvg = styled.svg`
    width: 22px;
    height: 20px;
    fill: #D9D9D9;
`

export const RepeatBtn = styled(Btn)`
    margin-right: 24px;
`

export const RepeatBtnSvg = styled.svg`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`

export const ShuffleBtn = styled(Btn)`
    display: flex;
    align-items: center;
`

export const ShuffleBtnSvg = styled.svg`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`

export const VolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`

export const VolumeImageSvg = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
`