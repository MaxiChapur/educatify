import { useEffect } from 'react'
import { Grid } from '@material-ui/core'

const Player = ({ data }) => {
  const audio = new Audio()
  audio.volume = 0.1
  audio.autoplay = true

  useEffect(() => {
    audio.paused ? (audio.src = data.url) : audio.pause()
  }, [audio])

  return (
    <Grid container style={{ positon: 'fixed', top: '10px' }}>
      <p>{data.name}</p>
      <img src={data.image} alt="" />
      <button onClick={() => audio.paused && audio.pause()}>pause</button>
    </Grid>
  )
}
export default Player
