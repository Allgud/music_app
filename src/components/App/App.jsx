import React, { useEffect, useState } from "react";
import Context from '../context/context'
import AuthPage from '../../pages/AuthPage'
import GStyles from "./global";
import * as S from "./styles";
import MainPage from "../../pages/MainPage";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
      clearTimeout(timeout)
    }, 5000)
    setLoading(true)
  }, [])

  return (
    <Context.Provider value={loading}>
      <GStyles />
      <S.Wrapper>
        <S.Container>
          <AuthPage />
          <MainPage />
        </S.Container>
      </S.Wrapper>
    </Context.Provider> 
  )
}

export default App;
