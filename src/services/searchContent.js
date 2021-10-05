import axios from 'axios'
const url = 'https://api.spotify.com/v1/search?'

export const searchContent = async (token, string) => {
  let data = {
    q: string,
    type: ['album', 'artist', 'track'],
    limit: 5,
  }
  const jquery = new URLSearchParams(data).toString()

  const request = await axios({
    method: 'get',
    url: url + jquery,
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  return request
}
