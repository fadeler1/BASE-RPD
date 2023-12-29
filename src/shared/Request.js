import axios, { CancelToken } from 'axios';

const PROTOCOL = import.meta.env.VITE_DEFAULT_SECURE === 'true' ? 'https' : 'http';
const BASE_URL = `${PROTOCOL}://${import.meta.env.VITE_BFF_BASE_URL}`;
const TIMEOUT = 30000;
const headers = {
  'Access-Control-Allow-Origin': '*'
}
const Request = ({ method, url, data }) => {
  const source = CancelToken.source();
  setTimeout(source.cancel, TIMEOUT);


  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    headers,
  });
};

export default Request;