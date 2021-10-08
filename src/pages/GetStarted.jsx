import './GetStarted.css'

const GetStarted = () => {
  const url = 'https://accounts.spotify.com/authorize?'

  const data = {
    client_id: '2caa5284ddc648bc983617039538a30c',
    response_type: 'token',
    redirect_uri: 'https://educatify.herokuapp.com/auth',
    //redirect_uri: 'http://localhost:3000/auth', ---> Only for testing/developing
    scope: 'user-read-private user-read-email user-library-read',
  }

  const querystring = new URLSearchParams(data)

  return (
    <div>
      <h1>Educatify</h1>
      <p>
        Welcome to Educatify.
        <br /> Use this website to check your favorite tracks, artists and albums from Spotify. <br />
        This web is made for educational purposes.
      </p>
      <div className="button_GetStarted" onClick={() => (window.location.href = url + querystring)}>
        Get Started
      </div>
    </div>
  )
}

export default GetStarted
