import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://dev.codeleap.co.uk/';

export default axios;
