import { categories } from '../services/categories'
import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { searchContent } from '../services/searchContent'
import './Search.css'

const Search = ({ option, playSong }) => {
  const token = window.localStorage.getItem('accessToken')
  const [category, setCategory] = useState()
  const [results, setResults] = useState()
  const [showResults, setShowResults] = useState(false)
  let string

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

  const trackCategory = (name, url) => {
    let data = {
      name: name,
      url: url,
    }
    option('Browse Category', data)
  }

  const search = () => {
    searchContent(token, string).then((res) => {
      console.log(res.data)
      setResults(res.data)
      setShowResults(true)
    })
  }

  const searchResults = () => {
    switch (showResults) {
      case true:
        return (
          <div style={{ paddingBottom: '120px' }}>
            <h1>Songs:</h1>
            <Grid container item direction="column">
              {results &&
                results.tracks.items.map((element, index) => (
                  <Grid
                    onClick={() => playSong(element.name, element.album.images[2].url, element.preview_url)}
                    container
                    item
                    direction="row"
                    key={index}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
                    <img src={element.album.images[2].url} alt="" />
                    <h4>{element.name}</h4>
                  </Grid>
                ))}
            </Grid>
            <h1>Artists:</h1>
            <Grid container item direction="column">
              {results &&
                results.artists.items.map(
                  (element, index) =>
                    element.images[2] && (
                      <Grid
                        style={{ paddingLeft: '10px', paddingBottom: '10px' }}
                        container
                        item
                        key={index}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start">
                        <img style={{ width: '20%' }} src={element.images[2].url} alt="" />
                        <h4>{element.name}</h4>
                      </Grid>
                    )
                )}
            </Grid>
            <h1>Albums:</h1>
            <Grid container item direction="column">
              {results &&
                results.albums.items.map((element, index) => (
                  <Grid
                    onClick={() => trackAlbum(element.name, element.images[0].url, element.artists, element.href)}
                    container
                    item
                    direction="row"
                    key={index}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
                    <img src={element.images[2].url} alt="" />
                    <h4>{element.name}</h4>
                  </Grid>
                ))}
            </Grid>
          </div>
        )
      default:
        return (
          <Grid style={{ marginTop: '60px', marginBottom: '80px' }} container item direction="row">
            {category &&
              category.map((element, index) => (
                <Grid
                  container
                  item
                  onClick={() => trackCategory(element.name, element.href)}
                  key={index}
                  direction="column"
                  alignItems="center"
                  xs={6}>
                  <img id="gridImage" src={element.icons[0].url} alt="" />
                  <p>{element.name}</p>
                </Grid>
              ))}
          </Grid>
        )
    }
  }

  useEffect(() => {
    categories(token).then((res) => {
      setCategory(res)
    })
  }, [token])

  return (
    <>
      <h1>Search</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          search()
        }}>
        <input id="input_Search" onChange={(event) => (string = event.target.value)} />
      </form>
      {searchResults()}
    </>
  )
}
export default Search
