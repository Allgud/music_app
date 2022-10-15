export class MusicService {
    
    BASE_URL = 'http://51.250.95.23:8000'
    
    TRACKS_API = `${this.BASE_URL}/catalog/track`

    async getSourse(api) {
        const response = await fetch(api)
        const result = await response .json()
        return result;
    }

    getAllTracks() {
        return this.getSourse(`${this.TRACKS_API}/all`)
    }
}