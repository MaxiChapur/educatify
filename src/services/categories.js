import axios from 'axios'
let arr = []

export const categories = async (token, url) => {
  if (typeof url === 'undefined') {
    url = 'https://api.spotify.com/v1/browse/categories?limit=50'
  }

  const request = await axios({
    method: 'get',
    url: url,
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  arr.push(request.data.categories.items)
  request.data.categories.next && (await categories(token, request.data.categories.next))
  return arr.flat()
}
