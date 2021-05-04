import React, { ReactElement, useEffect } from 'react'

function Payment(): ReactElement {
  useEffect(function replaceEffect() {
    window.location.replace(
      'http://localhost:4040/?redirect-url=http://localhost:4000/'
    )
  }, [])

  return <>테스트</>
}

export default Payment
