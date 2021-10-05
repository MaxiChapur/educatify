import axios from 'axios'

export const findCategory = async (token, url) => {
  const request = await axios({
    method: 'get',
    url: url + '/playlists',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  return request
}
