import { Grid } from '@material-ui/core'
import Card from './Card'

const MyMusic = ({ songList }) => {
  return (
    <>
      <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
        {songList.map((element, index) => {
          return <Card song={element} key={index} />
        })}
      </Grid>
    </>
  )
}
export default MyMusic
