import axios from 'axios';

const server = 'http://localhost:7000';

const request = (type, path, body) => axios
  .request({ url: `${server}${path}`, method: type, data: body })
  .then(req => req.data);

export const getGame = gameName => request('get', `/game/${gameName}`)

export const getSearch = (searchValue, platform, genre) => request('get', `/games/${searchValue}/${genre}/${platform}`)