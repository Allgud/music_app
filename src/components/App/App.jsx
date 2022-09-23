import React, { useEffect, useState } from "react";
import Context from '../context/context'
import Bar from '../Bar'
import Main from "../Main";
import Footer from "../Footer";
import GStyles from "./global";
import * as S from "./styles";

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
          <Main />
          <Bar />
          <Footer />
        </S.Container>
      </S.Wrapper>
    </Context.Provider> 
  )
}

export default App;
