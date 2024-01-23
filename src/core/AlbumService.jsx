import axios from 'axios'
class AlbumService {

    async getUserAlbums(id, callback) {
        try {
            const request = axios.get('https://jsonplaceholder.typicode.com/users/' + id + '/albums')
            const response = await request
            callback(response)
        } catch (error) {
            console.log(error)
        }
    }

    async getAlbumPhotos(id, callback) {
        const options = {
            params: { 'albumId': id }
        }
        try {
            const request = axios.get('https://jsonplaceholder.typicode.com/photos', options)
            const response = await request
            callback(response)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new AlbumService();