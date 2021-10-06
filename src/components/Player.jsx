import { Grid } from '@material-ui/core'
import { useEffect, useState } from 'react'
import PlayIcon from '../assets/PlayIcon'
import PauseIcon from '../assets/PauseIcon'

import './Player.css'

const Player = ({ data }) => {
  const audio = document.getElementById('player')
  const [playing, setPlaying] = useState(false)

  if (typeof data === 'undefined') {
    data = {
      name: 'Pick a song',
      image: '',
      url: '',
    }
  }

  useEffect(() => {
    setPlaying(true)
  }, [data])

  const handleAudio = () => {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
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
        className="button_player"
        onClick={() => {
          playing === false ? setPlaying(true) : setPlaying(false)
          handleAudio()
        }}
        item
        xs={2}>
        {controls()}
      </Grid>
      <Grid item xs={2}>
        <img src={data.image} alt="" />
      </Grid>
      <Grid style={{ overflowX: 'hidden', paddingLeft: '80px' }} container item xs={8} justifyContent="flex-start">
        <p id="playerText">{data.name}</p>
      </Grid>
    </Grid>
  )
}
export default Player
