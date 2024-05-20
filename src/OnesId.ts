import axios from "axios";
import { IMatrixClientCreds } from "matrix-react-sdk/src/MatrixClientPeg";
const BASE_URL = 'http://localhost:5002/api'
class OnesId
{
    async getAuth(username:any){   
        try{
          
             let data = JSON.stringify({
                "username": username
             });
              let config = {
                method: 'post',
                url: BASE_URL+'/chat/get-auth',
                headers: {
                  'Content-Type': 'application/json'
                },
                data : data
              };
            const result = (await axios.request(config)).data;
            return Promise.resolve(result.data.auth_req_id);
        }catch(error){
            return Promise.reject(error);
        }
    }
    async checkStatus(auth_req_id:string){
        try{
            let data = JSON.stringify({
                "auth_req_id": auth_req_id
              });
            let config = {
                method: 'post',
                url: BASE_URL+'/chat/check-status',
                headers: {
                  'Content-Type': 'application/json'
                },
                data : data
              };
            const result = (await axios.request(config)).data;
            return Promise.resolve(result.data);
        }catch(error){
            return Promise.reject(error);
        }
    }
    async checkLoginExists(access_token:string){
        try{
            let data = JSON.stringify({
                "access_token": access_token
              });
            let config = {
                method: 'post',
                url: BASE_URL+'/chat/check-login-exists',
                headers: {
                  'Content-Type': 'application/json'
                },
                data : data
              };
            const result = (await axios.request(config)).data;
            return Promise.resolve(result.data);
        }catch(error){
            return Promise.reject(error);
        }
    }
    async register(access_token:string){
        try{
            let data = JSON.stringify({
                "access_token": access_token
              });
            let config = {
                method: 'post',
                url: BASE_URL+'/chat/register',
                headers: {
                  'Content-Type': 'application/json'
                },
                data : data
              };
            const result = (await axios.request(config)).data;
            return Promise.resolve(result.data);
        }catch(error){
            return Promise.reject(error);
        }
    }
    async login(access_token:string,username:any){
        try{
            let data = JSON.stringify({
                "access_token": access_token,
                "username":username
              });
            let config = {
                method: 'post',
                url: BASE_URL+'/chat/login',
                headers: {
                  'Content-Type': 'application/json'
                },
                data : data
              };
            const result = (await axios.request(config)).data;
            const response2 = result.data;

             let output:IMatrixClientCreds ={
                    userId: response2['user_id'],
                    accessToken: response2['access_token'],
                    homeserverUrl: "https://" +response2['home_server'],
                    identityServerUrl: "https://" +response2['home_server'],
                    deviceId: response2['device_id'],
                }
            return Promise.resolve(output);
        }catch(error){
            return Promise.reject(error);
        }
    }
}
export default OnesId;
