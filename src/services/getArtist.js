import axios from 'axios'

export const getArtists = async (token, url) => {
  const request = await axios({
    method: 'get',
    url: url + '/top-tracks?market=AR',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  return request
}
