import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from 'react-router-dom'
import Home from './pages/Home'
import Sub1 from './pages/Sub1'
import Sub2 from './pages/Sub2'
import Payment from './pages/Payment'
import PaymentHandler from './pages/PaymentHandler'

function App() {
  return (
    <HashRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/sub1'>sub1</Link>
        </li>
        <li>
          <Link to='/sub2'>sub2</Link>
        </li>
      </ul>
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
