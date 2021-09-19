import axios from 'axios'

let arr = []
export const userLibrary = async (token, url) => {
  if (typeof url === 'undefined') {
    url = 'https://api.spotify.com/v1/me/tracks?limit=50'
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

  arr.push(request.data.items)

  if (request.data.next) {
    await userLibrary(token, request.data.next)
  }
  return arr.flat()
}
