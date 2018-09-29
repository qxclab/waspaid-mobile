import axios from 'axios'
import {BACKEND} from "../utils/constants";

export class RestClient {
    constructor() {
        this.defaultConfiguration = {
            baseURL: BACKEND,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        this.client = axios.create(this.defaultConfiguration);
    }

    addAuthToken(token){
        this.client = axios.create({
            ...this.defaultConfiguration,
            headers: {
                ...this.defaultConfiguration.headers,
                'Authorization': token,
            },
        })
    }

    get(path, params) {
        return this.client.get(path, params)
    }
    post(path, data) {
        return this.client.post(path, data)
    }
    put(path, data) {
        return this.client.put(path, data)
    }
    delete(path) {
        return this.client.delete(path)
    }
}

export default new RestClient()
