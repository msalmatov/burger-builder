import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2193a-default-rtdb.firebaseio.com/'
});

export default instance;