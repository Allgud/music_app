import styled from 'styled-components'
import { Btn } from '../../Layout/styles'

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
`