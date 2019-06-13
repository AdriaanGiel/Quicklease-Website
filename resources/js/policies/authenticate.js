import Api from '../models/Api';
export default class Authenticate{

    static async getToken(userData){
        return await Api().post('/auth/login',userData);
    }

    static async handleToken(data){
        return await Api().post('/auth/verification',data);
    }

}