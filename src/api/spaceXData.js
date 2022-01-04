import axios from 'axios';
import { API_BASEPATH } from 'config';

axios.defaults.baseURL = API_BASEPATH;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// Axios wrapper to handle error
const axiosWrapper = (apiCall) => apiCall.then(res => res.data).catch(err => Promise.reject(err));


const spaceXDataApi = {
  launches: {
    query: (params) => axiosWrapper(axios.post('/launches/query', params)),
  },
};

export default spaceXDataApi;