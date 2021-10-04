import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { getPlaylist } from '../services/getPlaylist'
import Card from '../components/Card'

const Playlists = ({ data, playSong }) => {
  const token = window.localStorage.getItem('accessToken')
  const [songs, setSongs] = useState()
  useEffect(() => {
    getPlaylist(token, data.url).then((res) => {
      setSongs(res.data)
    })
  }, [data, token])

  return (
    <Grid
      item
      container
      style={{ paddingBottom: '140px' }}
      justifyContent="center"
      direction="column"
      alignItems="center">
      <h1>{data.name}</h1>
      <img style={{ width: '50%' }} src={data.image[0].url} alt="" />
      <h3>{data.description}</h3>
      {songs && songs.items.map((element, index) => <Card key={index} playSong={playSong} song={element} />)}
    </Grid>
  )
}
export default Playlists
