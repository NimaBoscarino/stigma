import 'axios'

export default (axios, user) => {
  axios.defaults.baseURL = '/api/';
  if (user) {
    axios.defaults.headers.common['client'] = user.client;
    axios.defaults.headers.common['access-token'] = user['access-token'];
    axios.defaults.headers.common['uid'] = user.uid;
  }
}