import styled from "styled-components";

export const PlayListTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
`

const PlayListTitleCol = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`
export const PlayListTitleCol1 = styled(PlayListTitleCol)`
    width: 447px;
`

export const PlayListTitleCol2 = styled(PlayListTitleCol)`
    width: 321px;
`

export const PlayListTitleCol3 = styled(PlayListTitleCol)`
    width: 245px;
`

export const PlayListTitleCol4 = styled(PlayListTitleCol)`
    width: 60px;
    text-align: end;
`

export const PlayListTitleSvg = styled.svg`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`