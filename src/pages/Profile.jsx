import { useState, useEffect } from 'react'
import MyMusic from '../components/MyMusic'
import { userLibrary } from '../services/userLibrary'
import { userProfile } from '../services/userProfile'

const Profile = ({ location }) => {
  const [profile, setProfile] = useState()
  const [songList, setSongList] = useState()
  let token = new URLSearchParams(location.hash).get('#access_token')

  useEffect(() => {
    Promise.all([userProfile(token), userLibrary(token)]).then((res) => {
      setProfile(res[0].data)
      setSongList(res[1].data)
    })
  }, [token])

  return (
    <div>
      <h1>Liked songs of {profile && profile.display_name}</h1>
      {songList && <MyMusic songList={songList.items} accessToken={token} />}
    </div>
  )
}
export default Profile
