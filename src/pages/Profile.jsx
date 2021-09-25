import { useState, useEffect } from 'react'
import { Grid, Box } from '@material-ui/core'
import MyMusic from '../components/MyMusic'
import { userLibrary } from '../services/userLibrary'
import { userProfile } from '../services/userProfile'
import ReactAudioPlayer from 'react-audio-player'
import ButtonAppBar from '../components/ButtonAppBar'
import './Profile.css'

const Profile = () => {
  const token = window.localStorage.getItem('accessToken')
  const [profile, setProfile] = useState()
  const [songList, setSongList] = useState([])
  const [selectedSong, setSelectedSong] = useState([])

  const playSong = (url) => {
    setSelectedSong(url)
  }

  useEffect(() => {
    userProfile(token).then((res) => setProfile(res.data))
    userLibrary(token).then((res) => {
      setSongList(res)
    })
  }, [token])

  return (
    <>
      <div>
        <Grid container justifyContent="center" direction="column" alignItems="center" className="header_Profile">
          <Box>
            {profile && <ButtonAppBar name={profile.display_name} />}
            <ReactAudioPlayer className="player" src={selectedSong} autoPlay controls volume={0.1} />
          </Box>
        </Grid>
        {songList && <MyMusic songList={songList} playSong={playSong} />}
      </div>
    </>
  )
}
export default Profile
