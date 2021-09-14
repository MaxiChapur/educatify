const GetStarted = () => {
  const url = 'https://accounts.spotify.com/authorize?'

  const data = {
    client_id: '2caa5284ddc648bc983617039538a30c',
    response_type: 'token',
    redirect_uri: 'http://localhost:3000/profile',
    scope: 'user-read-private user-read-email user-library-read',
  }

  const querystring = new URLSearchParams(data)

  return (
    <div>
      <h1>Educatify</h1>
      <p>
        Welcome to Educatify. Use this website to see things in Spotifty <br />
        This web is made for educational purposes.
      </p>
      <button onClick={() => (window.location.href = url + querystring)}>Get Started!</button>
    </div>
  )
}

export default GetStarted
