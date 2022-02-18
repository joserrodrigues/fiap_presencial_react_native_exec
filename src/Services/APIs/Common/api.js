import axios from 'axios';

const ApiConn = axios.create({
    baseURL: process.env.BASE_URL,
});


export default ApiConn;