import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { getAlbum } from '../services/getAlbum'
import AlbumSongs from '../components/AlbumSongs'

const Albums = ({ data, playSong }) => {
  const token = window.localStorage.getItem('accessToken')
  const [songs, setSongs] = useState()

  useEffect(() => {
    getAlbum(token, data.url).then((res) => {
      setSongs(res.data)
    })
  }, [token, data])

  return (
    <Grid container justifyContent="center" direction="column">
      <h1>{data.name}</h1>
      <Grid container item justifyContent="center" alignContent="center">
        <img style={{ width: '50%' }} src={data.image[1].url} alt="" />
      </Grid>
      <h2>by {data.artist}</h2>
      {songs && <AlbumSongs songs={songs.tracks.items} playSong={playSong} image={data.image[2].url} />}
    </Grid>
  )
}
export default Albums
