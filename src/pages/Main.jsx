import { Grid } from '@material-ui/core'
import { useState } from 'react'
import './Main.css'
import Library from './Library'
import Home from './Home'
import Search from './Search'

const Main = () => {
  const [option, setOption] = useState('Home')

  const getOption = () => {
    switch (option) {
      case 'Library':
        return <Library />
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
      <Grid container item id="buttons_Main" justifyContent="space-evenly">
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
