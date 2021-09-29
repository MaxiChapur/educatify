import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import GetStarted from './pages/GetStarted'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import Albums from './pages/Albums'
import Main from './pages/Main'

const App = () => {
  let history = createBrowserHistory()
  return (
    <Router history={history}>
      <Switch>
        <Route component={GetStarted} exact path="/" />
        <Route component={Auth} exact path="/auth" />
        <Route component={Main} exact path="/main" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Albums} exact path="/albums" />
      </Switch>
    </Router>
  )
}
export default App
