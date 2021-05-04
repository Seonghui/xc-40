import React from 'react'
import { Switch, Route, Link, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Sub1 from './pages/Sub1'
import Sub2 from './pages/Sub2'
import Payment from './pages/Payment'
import PaymentHandler from './pages/PaymentHandler'
import styled from 'styled-components'

const Styled = {
  NavList: styled.ul`
    display: flex;
    justify-content: space-between;
  `,
  NavItem: styled.li`
    width: 100%;
    height: 30px;
    background-color: #d7d7d7;
    text-align: center;
    line-height: 30px;
    & + & {
      margin-left: 10px;
    }
  `,
}

function App() {
  return (
    <HashRouter>
      <Styled.NavList>
        <Styled.NavItem>
          <Link to='/'>HOME</Link>
        </Styled.NavItem>
        <Styled.NavItem>
          <Link to='/sub1'>SUB 1</Link>
        </Styled.NavItem>
        <Styled.NavItem>
          <Link to='/sub2'>SUB 2</Link>
        </Styled.NavItem>
      </Styled.NavList>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/modules/payment' component={Payment} />
        <Route path='/modules/payment-handler' component={PaymentHandler} />
        <Route path='/sub1' component={Sub1} />
        <Route path='/sub2' component={Sub2} />
      </Switch>
    </HashRouter>
  )
}

export default App
