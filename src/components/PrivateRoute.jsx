import { Redirect } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  !window.localStorage.getItem('accessToken') ? <Redirect to="/" /> : { children }
}
export default PrivateRoute
