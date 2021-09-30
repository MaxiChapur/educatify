import axios from 'axios'
const url = 'https://api.spotify.com/v1/browse/new-releases'

export const newReleases = async (token) => {
  const request = await axios({
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
