import styled from "styled-components";

export const PlayerTrackPlay = styled.div`
    display: flex;
    flex-direction: row;
`

export const TrackPlayContain = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image author''image album';
    align-items: center;
`

export const TrackPlayImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: ${props => props.theme.trackIconBack};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    grid-area: image;
`

export const TrackPlayImageSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`

export const TrackPlayAuthor = styled.div`
    grid-area: author;
    min-width: 49px;
`

export const TrackPlayAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.color};
    white-space: nowrap;
`

export const TrackPlayAlbum = styled.div`
    grid-area: album;
    min-width: 49px;
`

export const TrackPlayAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    white-space: nowrap;
    color: ${props => props.theme.color};
`

export const TrackPlayLikeDis = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50%;
`
export const TrackPlayLike = styled.button`
    padding: 5px;
    border: none;
    outline: none;
    background: transparent;

    &:hover svg{
        fill: transparent;
        stroke: #ACACAC;
        cursor: pointer; 
    }

    &:active svg {
        fill: transparent;
        stroke: #${props => props.theme.color};
        cursor: pointer; 
    }
`

export const TrackPlayLikeSvg = styled.svg`
    width: 14px;
    height: 12px;
    fill: ${props => props.$liked ? '#696969' : 'transparent'};
    stroke: #696969;
`

export const TrackPlayDislike = styled(TrackPlayLike)`
    margin-left: 28.5px;
`

export const TrackPlayDislikeSvg = styled.svg`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
`