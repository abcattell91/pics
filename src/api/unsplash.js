import axios from 'axios'

export default axios.create({ // a customised axio copy
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID HJzkhiK494HaYlVH7MijPAThN8RFk5fB5gpBD2Q-P3c'
  }
});
