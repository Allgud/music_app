import React, { forwardRef } from "react";

import * as S from './styles'

const AudioBox = forwardRef((props, ref) => (
    <S.AudioBox>
        <audio src={props.src} ref={ref} preload='metadata' />
    </S.AudioBox>
))


export default AudioBox

