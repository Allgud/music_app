export class MusicService {
    
    BASE_URL = 'http://51.250.95.23:8000'
    
    TRACKS_API = `${this.BASE_URL}/catalog/track/all/`

    async getSourse(api) {
        const response = await fetch(api)
        const result = await response .json()
        return result;
    }

    getAllTracks(page = 1) {
        return this.getSourse(`${this.TRACKS_API}?page=${page}`)
    }

    async checkSignUp(userData) {
        const url = `${this.BASE_URL}/user/login/`
        const response = await fetch(url, {
            method: 'POST',
            body: userData,
            headers: {
                'Content-type': 'application/json'
              }
        })

        const data = response.json()
        return data
    }
}