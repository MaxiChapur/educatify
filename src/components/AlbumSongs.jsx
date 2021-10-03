import { Grid } from '@material-ui/core'
import './Card.css'

const AlbumSongs = ({ songs, playSong, image }) => {
  return (
    <>
      <Grid container justifyContent="center" style={{ marginBottom: '160px' }}>
        {songs &&
          songs.map((element, index) => (
            <Grid
              key={index}
              container
              item
              className="songsGrid"
              justifyContent="center"
              xs={10}
              onClick={() => playSong(element.name, image, element.preview_url)}>
              <Grid item xs={10}>
                <p className="songsGrid-text name">
                  {index + 1}. {element.name}
                </p>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </>
  )
}
export default AlbumSongs
