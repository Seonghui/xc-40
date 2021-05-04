import React, { ReactElement, useEffect } from 'react'
import { BASE_URL, POPUP_URL } from '../constants'

function Payment(): ReactElement {
  useEffect(function replaceEffect() {
    const REPLACE_URL = `${POPUP_URL}?redirect-url=${BASE_URL}`
    window.location.replace(REPLACE_URL)
  }, [])

  return <>테스트</>
}

export default Payment
