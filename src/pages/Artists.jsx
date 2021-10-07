import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { getArtists } from '../services/getArtist'
import { Redirect } from 'react-router'

const Artists = ({ data, playSong }) => {
  const token = window.localStorage.getItem('accessToken')
  const [artists, setArtists] = useState()

  useEffect(() => {
    getArtists(token, data.url)
      .then((res) => {
        setArtists(res.data)
        console.log(res.data)
      })
      .catch(() => <Redirect to="/" />)
  }, [data, token])

  return (
    <>
      <Grid container item direction="column" alignContent="center" style={{ paddingBottom: '40px' }}>
        <h1>{data.name}</h1>
        <img style={{ width: '80%' }} src={data.image} alt="" />
      </Grid>
      <Grid container item alignContent="center" direction="column" style={{ paddingBottom: '130px' }}>
        {artists &&
          artists.tracks.map((element, index) => (
            <Grid
              xs={10}
              container
              item
              direction="row"
              key={index}
              className="songsGrid"
              onClick={() => playSong(element.name, element.album.images[2].url, element.preview_url)}>
              <img src={element.album.images[2].url} alt="" />
              <p>{element.name}</p>
            </Grid>
          ))}
      </Grid>
    </>
  )
}
export default Artists
