import { Grid } from '@material-ui/core'
import './Card.css'

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
      xs={10}
      onClick={() => playSong(song.track.name, song.track.album.images[2].url, song.track.preview_url)}>
      <Grid container item xs={2} justifyContent="center">
        <img id="image_Card" src={song.track.album.images[2].url} alt="" />
      </Grid>
      <Grid item xs={10}>
        <p className="songsGrid-text name">{song.track.name}</p>
        <p className="songsGrid-text artist">by {getArtists(song.track.artists)}</p>
      </Grid>
    </Grid>
  )
}
export default Card
