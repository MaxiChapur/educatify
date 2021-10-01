import { Grid } from '@material-ui/core'
import { useState } from 'react'
import './Main.css'
import Library from './Library'
import Home from './Home'
import Search from './Search'
import Player from '../components/Player'

const Main = () => {
  const [option, setOption] = useState('Home')
  const [selectedSong, setSelectedSong] = useState()

  const refreshPlayer = (name, image, url) => {
    let data = {
      name: name,
      image: image,
      url: url,
    }
    setSelectedSong(data)
  }

  const getOption = () => {
    switch (option) {
      case 'Library':
        return <Library playSong={refreshPlayer} />
      case 'Home':
        return <Home />
      case 'Search':
        return <Search />
      default:
        return
    }
  }

  return (
    <>
      {getOption()}
      {selectedSong && <Player data={selectedSong} />}
      <Grid container item id="controlButtons_Main" justifyContent="space-evenly">
        <div className="button_Main" onClick={() => setOption('Home')}>
          Home
        </div>
        <div className="button_Main" onClick={() => setOption('Library')}>
          Library
        </div>
        <div className="button_Main" onClick={() => setOption('Search')}>
          Search
        </div>
      </Grid>
    </>
  )
}
export default Main
