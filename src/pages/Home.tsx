import React, { ReactElement } from 'react'
import useQuery from '../hooks/useQuery'
import HomeContainer from '../containers/HomeContainer'
import PaymentContainer from '../containers/PaymentContainer'

function Home(): ReactElement {
  const query = useQuery()

  switch (query.get('module')) {
    case 'payment':
      return (
        <>
          <PaymentContainer />
          <HomeContainer />
        </>
      )
    default:
      return <HomeContainer />
  }
}

export default Home
