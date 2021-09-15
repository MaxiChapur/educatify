import React, { useState, useEffect } from 'react'
import MyMusic from '../components/MyMusic'
import { userLibrary } from '../services/userLibrary'
import { userProfile } from '../services/userProfile'
import ReactAudioPlayer from 'react-audio-player'

const Profile = ({ location }) => {
  const [profile, setProfile] = useState()
  const [songList, setSongList] = useState()
  const [selectedSong, setSelectedSong] = useState()
  let token = new URLSearchParams(location.hash).get('#access_token')

  const playSong = (url) => {
    setSelectedSong(url)
  }

  useEffect(() => {
    Promise.all([userProfile(token), userLibrary(token)]).then((res) => {
      setProfile(res[0].data)
      setSongList(res[1].data)
    })
  }, [token])

  return (
    <div>
      <h1>Liked songs of {profile && profile.display_name}</h1>
      {selectedSong && <ReactAudioPlayer src={selectedSong} autoPlay controls />}
      {songList && <MyMusic songList={songList.items} playSong={playSong} />}
    </div>
  )
}
export default Profile
