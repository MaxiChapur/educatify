import { Grid } from '@material-ui/core'
import { useState } from 'react'
import PlayIcon from '../assets/PlayIcon'
import PauseIcon from '../assets/PauseIcon'

import './Player.css'

const Player = ({ data }) => {
  const audio = document.getElementById('player')
  const [playing, setPlaying] = useState()

  if (typeof data === 'undefined') {
    data = {
      name: 'Pick a song',
      image: '',
      url: '',
    }
  }

  const handleAudio = () => {
    if (audio.paused) {
      audio.play()
    } else audio.pause()
  }

  const controls = () => {
    if (!playing) {
      return <PauseIcon />
    } else {
      return <PlayIcon />
    }
  }

  return (
    <Grid id="player_controls" container style={{ positon: 'fixed', top: '10px' }}>
      <Grid
        onClick={() => {
          audio.paused === false ? setPlaying(true) : setPlaying(false)
          handleAudio()
        }}
        item
        xs={2}>
        {controls()}
      </Grid>
      <Grid item xs={2}>
        <img style={{ paddingTop: '5px' }} src={data.image} alt="" />
      </Grid>
      <Grid style={{ overflowX: 'hidden', paddingLeft: '80px' }} container item xs={8} justifyContent="flex-start">
        <p id="playerText">{data.name}</p>
      </Grid>
    </Grid>
  )
}
export default Player
