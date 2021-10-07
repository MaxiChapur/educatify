import { useState, useEffect } from 'react'
import { newReleases } from '../services/newReleases'
import { featuredPlaylist } from '../services/featuredPlaylist'
import { Grid } from '@material-ui/core'
import { Redirect } from 'react-router'

const Home = ({ option }) => {
  const token = window.localStorage.getItem('accessToken')
  const [releases, setReleases] = useState()
  const [featured, setFeatured] = useState()

  const trackAlbum = (name, image, artist, url) => {
    let arr = artist.map((element) => {
      return element.name
    })
    const album = {
      name: name,
      image: image,
      artist: arr.toString(),
      url: url,
    }
    option('Album', album)
  }

  const trackPlaylist = (name, description, image, url) => {
    const playlist = {
      name: name,
      description: description,
      image: image,
      url: url,
    }
    option('Playlist', playlist)
  }

  useEffect(() => {
    Promise.all([newReleases(token), featuredPlaylist(token)])
      .then((res) => {
        setReleases(res[0].data)
        setFeatured(res[1].data)
      })
      .catch(() => <Redirect to="/" />)
  }, [token])

  return (
    <div style={{ overflow: 'auto' }}>
      <h1>New Releases</h1>
      <Grid container item direction="row" alignItems="flex-start" wrap="nowrap" style={{ overflow: 'auto' }}>
        {releases &&
          releases.albums.items.map((element, index) => (
            <Grid
              onClick={() => trackAlbum(element.name, element.images, element.artists, element.href)}
              container
              item
              key={index}
              direction="column"
              alignItems="center"
              xs={4}
              style={{ marginLeft: '10px', marginRight: '10px' }}>
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
              onClick={() => trackPlaylist(element.name, element.description, element.images, element.href)}
              container
              item
              key={index}
              direction="column"
              alignItems="center"
              xs={4}
              style={{ marginLeft: '10px', marginRight: '10px' }}>
              <img style={{ width: '128px', height: '128px' }} src={element.images[0].url} alt="" />
              <h4>{element.name}</h4>
            </Grid>
          ))}
      </Grid>
    </div>
  )
}
export default Home
