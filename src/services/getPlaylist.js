import axios from 'axios'

export const getPlaylist = async (token, url) => {
  const request = await axios({
    method: 'get',
    url: url + '/tracks?offset=0&limit=100',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  return request
}
