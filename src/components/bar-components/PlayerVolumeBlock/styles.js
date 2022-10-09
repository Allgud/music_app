import styled from 'styled-components'

const Btn = styled.div`
    cursor: pointer;
`
export const BarVolumeBlock = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 92px 0 0;
`

export const VolumeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
`

export const VolumeProgress = styled(Btn)`
    width: 109px;
`

export const VolumeProgressLine = styled.input`
    cursor: pointer;
    width: 109px;
    appearance: none;

    &::-webkit-slider-runnable-track {
        height: 3px;
	    border: 1px solid #797979;
        background-color: ${props => props.theme.containerBack};
        margin-top: -10px;
        overflow: hidden;
    }

    &::-webkit-slider-thumb {
        background: #313131;
        border: 2px solid #797979;
        border-radius: 50%;
        cursor: pointer;
        width: 12px;
        height: 12px;
        -webkit-appearance: none;
        margin-top: -6px;
        box-shadow: -109px 0 0 96px ${props => props.theme.volumeFill};
    }
`