import { useState, useEffect } from 'react'
import { newReleases } from '../services/newReleases'
import { featuredPlaylist } from '../services/featuredPlaylist'
import { Grid } from '@material-ui/core'

const Home = () => {
  const token = window.localStorage.getItem('accessToken')
  const [releases, setReleases] = useState()
  const [featured, setFeatured] = useState()

  useEffect(() => {
    Promise.all([newReleases(token), featuredPlaylist(token)]).then((res) => {
      setReleases(res[0].data)
      setFeatured(res[1].data)
    })
  }, [token])

  return (
    <div style={{ overflow: 'auto' }}>
      <h1>New Releases</h1>
      <Grid container item direction="row" alignItems="flex-start" wrap="nowrap" style={{ overflow: 'auto' }}>
        {releases &&
          releases.albums.items.map((element, index) => (
            <Grid
              container
              item
              key={index}
              direction="column"
              alignItems="center"
              xs={4}
              style={{ 'margin-left': '10px', 'margin-right': '10px' }}>
              <img style={{ width: '128px', height: '128px' }} src={element.images[0].url} alt="" />
              <h4>{element.name}</h4>
            </Grid>
          ))}
      </Grid>
      <h1>Featured Playlists</h1>
      <Grid container item direction="row" alignItems="flex-start" wrap="nowrap" style={{ overflow: 'auto' }}>
        {featured &&
          featured.playlists.items.map((element, index) => (
            <Grid
              container
              item
              key={index}
              direction="column"
              alignItems="center"
              xs={4}
              style={{ 'margin-left': '10px', 'margin-right': '10px' }}>
              <img style={{ width: '128px', height: '128px' }} src={element.images[0].url} alt="" />
              <h4>{element.name}</h4>
            </Grid>
          ))}
      </Grid>
    </div>
  )
}
export default Home
