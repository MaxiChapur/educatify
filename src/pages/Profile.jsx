import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import MyMusic from '../components/MyMusic'
import { userLibrary } from '../services/userLibrary'
import { userProfile } from '../services/userProfile'
import ReactAudioPlayer from 'react-audio-player'
import './Profile.css'

const Profile = ({ location }) => {
  const [profile, setProfile] = useState()
  const [songList, setSongList] = useState([])
  const [selectedSong, setSelectedSong] = useState([])
  let token = new URLSearchParams(location.hash).get('#access_token')

  const playSong = (url) => {
    setSelectedSong(url)
  }

  useEffect(() => {
    Promise.all([userProfile(token), userLibrary(token)]).then((res) => {
      setProfile(res[0].data)
      setSongList(res[1])
    })
  }, [token])

  return (
    <div>
      <Grid container justifyContent="center" direction="column" alignItems="center" className="header_Profile">
        <h1>Liked songs of {profile && profile.display_name}</h1>
        <ReactAudioPlayer className="player_Profile" src={selectedSong} autoPlay controls volume={0.1} />
      </Grid>
      {songList && <MyMusic songList={songList} playSong={playSong} />}
    </div>
  )
}
export default Profile
