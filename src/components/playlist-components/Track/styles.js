import styled from "styled-components";

export const PlayListItem = styled.li`
    width: 100%;
    display: block;
    margin-bottom: 12px;   
`
export const PlayListTrack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TrackTitle = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 447px;
`

export const TrackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: ${props => props.theme.trackIconBack};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
`

export const TrackTitleImageSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`

export const TrackTitleText = styled.div`
    display: block
`

export const TrackTitleLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.color};
`

export const TrackTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4E4E4E;
`

export const TrackAuthor = styled.div`
    width: 321px;
    display: flex;
    justify-content: flex-start;
`

export const TrackAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.color};
    text-align: left;
`

export const TrackAlbum = styled.div`
    width: 245px;
`

export const TrackAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
`

export const TrackTimeText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`

export const TrackTime = styled.div`
    display: block
`

export const TrackTimeSvg = styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: ${props => props.$liked ? '#696969' : 'transparent'};
    stroke: #696969;
`

export const TrackImgSkeleton = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
`

export const TrackTitleTextSkeleton = styled.div`
    width: 356px;
    height: 19px;
    background-color: #313131;
`

export const TrackAuthorSkeleton = styled.div`
    width: 271px;
    height: 19px;
    background-color: #313131;
`

export const TrackAlbumSkeleton = styled.div`
    width: 305px;
    height: 19px;
    background-color: #313131;
`