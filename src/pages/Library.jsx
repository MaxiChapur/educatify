import { useState, useEffect } from 'react'
import MyMusic from '../components/MyMusic'
import { userLibrary } from '../services/userLibrary'
import './Library.css'
import { Redirect } from 'react-router'

const Library = ({ playSong }) => {
  const token = window.localStorage.getItem('accessToken')
  const [songList, setSongList] = useState([])

  useEffect(() => {
    userLibrary(token)
      .then((res) => {
        setSongList(res)
      })
      .catch(() => <Redirect to="/" />)
  }, [token])

  return (
    <>
      <div>{songList && <MyMusic songList={songList} playSong={playSong} />}</div>
    </>
  )
}
export default Library
