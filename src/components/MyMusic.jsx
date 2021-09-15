import { Grid } from '@material-ui/core'
import Card from './Card'

const MyMusic = ({ songList, playSong }) => {
  return (
    <>
      <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
        {songList.map((element, index) => {
          return <Card song={element} key={index} playSong={playSong} />
        })}
      </Grid>
    </>
  )
}
export default MyMusic
