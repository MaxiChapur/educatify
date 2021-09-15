import { Grid } from '@material-ui/core'
import './Card.css'

/* const setDuration = (time) => {
  let minutes = Math.floor(time / 60000)
  var seconds = ((time % 60000) / 1000).toFixed(0)
  return seconds === 60 ? minutes + 1 + ':00' : minutes + ':' + (seconds < 10 ? '0' : '') + seconds
} */

const getArtists = (artists) => {
  let arrArtists = []
  artists.forEach((element) => {
    arrArtists.push(element.name)
  })
  return arrArtists.toString()
}

const Card = ({ song, playSong }) => {
  return (
    <Grid
      container
      item
      className="songsGrid"
      justifyContent="center"
      xs={8}
      onClick={() => playSong(song.track.preview_url)}>
      <Grid container item xs={2} justifyContent="center">
        <img src={song.track.album.images[2].url} alt="Holis" />
      </Grid>
      <Grid item xs={10}>
        <p className="songsGrid-text name">{song.track.name}</p>
        <p className="songsGrid-text artist">by {getArtists(song.track.artists)}</p>
      </Grid>
    </Grid>
  )
}
export default Card
