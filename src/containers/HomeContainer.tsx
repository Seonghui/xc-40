import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

function HomeContainer(): ReactElement {
  const history = useHistory()
  const handleClickPayment = (): void => {
    history.push('/?module=payment')
  }

  return (
    <div>
      <div>
        <img src='https://picsum.photos/700/300' alt='test' />
        <img src='https://picsum.photos/700/300' alt='test' />
        <img src='https://picsum.photos/700/300' alt='test' />
        <img src='https://picsum.photos/700/300' alt='test' />
      </div>
      <div>
        <button onClick={handleClickPayment}>결제모듈 띄우기</button>
      </div>
    </div>
  )
}

export default HomeContainer
