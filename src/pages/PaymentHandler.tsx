import React, { ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function PaymentHandler(): ReactElement {
  const history = useHistory()

  useEffect(
    function historyEffect() {
      history.goBack()
    },
    [history]
  )

  return <div>PaymentHandler</div>
}

export default PaymentHandler
