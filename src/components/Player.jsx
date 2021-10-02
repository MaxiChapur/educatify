import { Grid } from '@material-ui/core'
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

  const controls = () => {
    if (!audio.paused) {
      data.url = ''
      audio.pause()
    } else audio.play()
  }

  return (
    <Grid id="player_controls" container style={{ positon: 'fixed', top: '10px' }}>
      <svg
        onClick={() => controls()}
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 0 24 24"
        width="48px"
        fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M10 16.5l6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
      <img src={data.image} alt="" />
      <p>{data.name}</p>
      <audio id="player" src={data.url} autoPlay volume={0.2}></audio>
    </Grid>
  )
}
export default Player
