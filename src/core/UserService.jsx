import axios from 'axios'
class UserService {

    async getList(callback) {
        try {
            const request = axios.get('https://jsonplaceholder.typicode.com/users/')
            const response = await request
            callback(response)
        } catch (error) {
            console.log(error)
        }
    }

    async getUser(id, callback) {
        try {
            const request = axios.get('https://jsonplaceholder.typicode.com/users/'+ id )
            const response = await request
            callback(response)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UserService();