import { useEffect, useState } from 'react'
import { findCategory } from '../services/findCategory'
import { Grid } from '@material-ui/core'
import { Redirect } from 'react-router'

const BrowseCategory = ({ data, option }) => {
  const token = window.localStorage.getItem('accessToken')
  const [playlist, setPlaylist] = useState()

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
    findCategory(token, data.url)
      .then((res) => {
        setPlaylist(res.data)
      })
      .catch(() => <Redirect to="/" />)
  }, [data, token])

  return (
    <>
      <h1>{data.name}</h1>
      <Grid container item direction="row" alignItems="center" style={{ paddingBottom: '80px' }}>
        {playlist &&
          playlist.playlists.items.map((element, index) => (
            <Grid
              onClick={() => trackPlaylist(element.name, element.description, element.images, element.href)}
              container
              item
              key={index}
              direction="column"
              alignItems="center"
              xs={5}
              style={{ marginLeft: '10px', marginRight: '10px' }}>
              <img style={{ width: '128px', height: '128px' }} src={element.images[0].url} alt="" />
              <h5>{element.name}</h5>
            </Grid>
          ))}
      </Grid>
    </>
  )
}
export default BrowseCategory
