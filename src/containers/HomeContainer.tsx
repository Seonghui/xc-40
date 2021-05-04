import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Styled = {
  Wrap: styled.div`
    padding: 0 16px;
  `,
  Box: styled.div`
    width: 100%;
    height: 300px;
    background-color: #d7d7d7;
    margin-top: 30px;
  `,
  Button: styled.button`
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
    font: initial;
    text-decoration: none;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 60px;
    width: 100%;
    height: 52px;
    background-color: #3581ff;
    color: #fff;
    font-size: 18px;
  `,
}

function HomeContainer(): ReactElement {
  const history = useHistory()
  const handleClickPayment = (): void => {
    history.push('/?module=payment')
  }

  return (
    <Styled.Wrap>
      <div>
        <Styled.Box />
        <Styled.Box />
        <Styled.Box />
        <Styled.Box />
        <Styled.Box />
      </div>
      <div>
        <Styled.Button onClick={handleClickPayment}>OPEN</Styled.Button>
      </div>
    </Styled.Wrap>
  )
}

export default HomeContainer
