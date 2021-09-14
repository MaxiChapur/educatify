import axios from 'axios'
const url = 'https://api.spotify.com/v1/me'

export const userProfile = async (token) => {
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
