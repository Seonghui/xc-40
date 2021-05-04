import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../constants'

const Styled = {
  Wrap: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
}

function PaymentContainer(): ReactElement {
  return (
    <Styled.Wrap>
      <iframe
        title='test'
        width='100%'
        height='100%'
        src={`${BASE_URL}modules/payment?method=get&type=iframe`}
        frameBorder={0}
      />
    </Styled.Wrap>
  )
}

export default PaymentContainer
