import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import GetStarted from './pages/GetStarted'
import Profile from './pages/Profile'

const App = () => {
  let history = createBrowserHistory()
  return (
    <Router history={history}>
      <Switch>
        <Route component={GetStarted} exact path="/" />
        <Route component={Profile} exact path="/profile" />
      </Switch>
    </Router>
  )
}
export default App
