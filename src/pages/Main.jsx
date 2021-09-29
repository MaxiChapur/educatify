import { Grid } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { userProfile } from '../services/userProfile'
import './Main.css'
import Profile from './Profile'

const Main = () => {
  const [profile, setProfile] = useState()
  const [option, setOption] = useState('Home')
  const token = window.localStorage.getItem('accessToken')

  const getOption = () => {
    switch (option) {
      case 'Library':
        return <Profile />
      default:
        return
    }
  }

  useEffect(() => {
    userProfile(token).then((res) => setProfile(res.data))
  }, [token])

  return (
    <>
      <div>{profile && <h1>{profile.display_name}'s Library</h1>}</div>
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
