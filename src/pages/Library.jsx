import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import MyMusic from '../components/MyMusic'
import { userLibrary } from '../services/userLibrary'
import ReactAudioPlayer from 'react-audio-player'
import './Library.css'

const Library = () => {
  const token = window.localStorage.getItem('accessToken')
  const [songList, setSongList] = useState([])
  const [selectedSong, setSelectedSong] = useState([])

  const playSong = (url) => {
    setSelectedSong(url)
  }

  useEffect(() => {
    userLibrary(token).then((res) => {
      setSongList(res)
    })
  }, [token])

  return (
    <>
      <div>
        <Grid container justifyContent="center" direction="column" alignItems="center" className="header_Profile">
          <ReactAudioPlayer className="player" src={selectedSong} autoPlay controls volume={0.1} />
        </Grid>
        {songList && <MyMusic songList={songList} playSong={playSong} />}
      </div>
    </>
  )
}
export default Library
