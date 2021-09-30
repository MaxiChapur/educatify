import { categories } from '../services/categories'
import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import './Search.css'

const Search = () => {
  const token = window.localStorage.getItem('accessToken')
  const [category, setCategory] = useState()

  useEffect(() => {
    categories(token).then((res) => setCategory(res.data))
  }, [token])

  return (
    <>
      <h1>Search</h1>
      <input id="input_Search"></input>
      <Grid style={{ marginTop: '60px', marginBottom: '80px' }} container item direction="row">
        {category &&
          category.categories.items.map((element, index) => (
            <Grid container item key={index} direction="column" alignItems="center" xs={6}>
              <img id="gridImage" src={element.icons[0].url} alt="" />
              <p>{element.name}</p>
            </Grid>
          ))}
      </Grid>
    </>
  )
}
export default Search
