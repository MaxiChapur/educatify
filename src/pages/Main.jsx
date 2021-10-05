import { Grid } from '@material-ui/core'
import { useState } from 'react'
import './Main.css'
import Library from './Library'
import Home from './Home'
import Search from './Search'
import Player from '../components/Player'
import Album from './Albums'
import Playlists from './Playlists'
import BrowseCategory from './BrowseCategory'

const Main = () => {
  const [option, setOption] = useState('Home')
  const [selectedSong, setSelectedSong] = useState()
  const [data, setData] = useState()
  const audio = document.getElementById('player')
  audio.volume = 0.3

  const refreshPlayer = (name, image, url) => {
    audio.src = url
    let data = {
      name: name,
      image: image,
      url: url,
    }
    setSelectedSong(data)
  }

  const switchPages = (page, data) => {
    setData(data)
    setOption(page)
  }

  const getOption = () => {
    switch (option) {
      case 'Library':
        return <Library playSong={refreshPlayer} />
      case 'Home':
        return <Home option={switchPages} />
      case 'Search':
        return <Search option={switchPages} />
      case 'Album':
        return <Album data={data} playSong={refreshPlayer} />
      case 'Playlist':
        return <Playlists data={data} playSong={refreshPlayer} />
      case 'Browse Category':
        return <BrowseCategory data={data} option={switchPages} />
      default:
        return
    }
  }

  return (
    <>
      {getOption()}
      <Grid container item id="controlButtons_Main" justifyContent="space-evenly" alignItems="center">
        {selectedSong && <Player data={selectedSong} />}
        <Grid className="button_Main" onClick={() => setOption('Home')}>
          Home
        </Grid>
        <Grid className="button_Main" onClick={() => setOption('Library')}>
          Library
        </Grid>
        <Grid className="button_Main" onClick={() => setOption('Search')}>
          Search
        </Grid>
      </Grid>
    </>
  )
}
export default Main
