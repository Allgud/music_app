import styled from 'styled-components'
<<<<<<< HEAD

const Btn = styled.div`
    cursor: pointer;
`
=======
import { Btn } from '../../Layout/styles'
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5

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