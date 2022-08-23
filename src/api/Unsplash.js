import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID YBMltQlU3OPTtHkiwJCIYzTGgWBaaj0_dNYG8-qNcag'
    }
});