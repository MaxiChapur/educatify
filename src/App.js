import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import GetStarted from './pages/GetStarted'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  let history = createBrowserHistory()
  return (
    <Router history={history}>
      <Switch>
        <Route component={GetStarted} exact path="/" />
        <Route component={Auth} exact path="/auth" />
        <PrivateRoute>
          <Route component={Profile} exact path="/profile" />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}
export default App
