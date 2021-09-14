import axios from 'axios'
const url = 'https://api.spotify.com/v1/me/tracks'

export const userLibrary = async (token) => {
  const request = axios({
    method: 'get',
    url: url,
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  return request
}
