import { Redirect } from 'react-router-dom'

const Auth = ({ location }) => {
  window.localStorage.setItem('accessToken', new URLSearchParams(location.hash).get('#access_token'))

  return <Redirect to="/Main" />
}
export default Auth
