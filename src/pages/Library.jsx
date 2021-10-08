import { useState, useEffect } from 'react'
import MyMusic from '../components/MyMusic'
import { userLibrary } from '../services/userLibrary'
import './Library.css'
import { Redirect } from 'react-router'
import Loading from '../components/Loading'

const Library = ({ playSong }) => {
  const token = window.localStorage.getItem('accessToken')
  const [songList, setSongList] = useState()

  const loader = () => {
    if (!songList) {
      return <Loading />
    } else return
  }

  useEffect(() => {
    userLibrary(token)
      .then((res) => {
        setSongList(res)
      })
      .catch(() => <Redirect to="/" />)
  }, [token])

  return (
    <>
      {loader()}
      <h3>List of liked songs!</h3>
      <div>{songList && <MyMusic songList={songList} playSong={playSong} />}</div>
    </>
  )
}
export default Library
