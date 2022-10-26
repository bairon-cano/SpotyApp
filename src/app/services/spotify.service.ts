import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service online');
  }

  getNewRelease(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC_14qVcIl5jowBEnQ9q59Dxq_WwUQ35LazYvWgvWDZgkFgCvvyMLdZpif73DUJSjfA-HtFwAJxQEDkQ3AgaRCqDe3wgOQbIc0EjTGdErsqDnTIXDE'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
  }

  getArtist(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC_14qVcIl5jowBEnQ9q59Dxq_WwUQ35LazYvWgvWDZgkFgCvvyMLdZpif73DUJSjfA-HtFwAJxQEDkQ3AgaRCqDe3wgOQbIc0EjTGdErsqDnTIXDE'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10&offset=15`, {headers})
  }
}
