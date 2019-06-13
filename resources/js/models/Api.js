import Axios from 'axios';
import Store from '../store';

export default () => {

    let axios = Axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            'Accept': 'application/json'
        }
    });

    if(Store.getters.loggedIn){
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token')
    }

    return axios;
}