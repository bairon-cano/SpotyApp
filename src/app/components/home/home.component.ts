import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nuevasCanciones: any[] = []

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewRelease()
      .subscribe((data: any) => {
        console.log(data.albums.items);
        this.nuevasCanciones = data.albums.items
      })
  }

}
