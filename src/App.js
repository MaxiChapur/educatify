import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import GetStarted from './pages/GetStarted'
import Auth from './pages/Auth'
import Main from './pages/Main'

const App = () => {
  let history = createBrowserHistory()
  return (
    <Router history={history}>
      <Switch>
        <Route component={GetStarted} exact path="/" />
        <Route component={Auth} exact path="/auth" />
        <Route component={Main} exact path="/main" />
      </Switch>
    </Router>
  )
}
export default App
