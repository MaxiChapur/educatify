import { Grid } from '@material-ui/core'
import PlayIcon from '../assets/PlayIcon'
import PauseIcon from '../assets/PauseIcon'

import './Player.css'

const Player = ({ data }) => {
  const audio = document.getElementById('player')
  if (typeof data === 'undefined') {
    data = {
      name: 'Pick a song',
      image: '',
      url: '',
    }
  }

  const play_pause = () => {
    if (!audio.paused) {
      data.url = ''
      audio.pause()
    } else audio.play()
  }

  const controls = (bool) => {
    switch (bool) {
      case true:
        return <PlayIcon func={play_pause} />
      case false:
        return <PauseIcon func={play_pause} />
      default:
        return
    }
  }

  audio.src = data.url

  return (
    <Grid id="player_controls" container style={{ positon: 'fixed', top: '10px' }}>
      <Grid item xs={2}>
        {controls(audio.paused)}
      </Grid>
      <Grid item xs={2}>
        <img src={data.image} alt="" />
      </Grid>
      <Grid container item xs={8} justifyContent="flex-start">
        <p>{data.name}</p>
      </Grid>
    </Grid>
  )
}
export default Player
