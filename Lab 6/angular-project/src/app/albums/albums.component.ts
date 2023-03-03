import { Component } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../module';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums: Album[];
  constructor(private albumService: AlbumService){
    this.albums = [];
  }
  ngOnInit(): void{
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
  delete(id:number){
    this.albums = this.albums.filter(i => i.id != id);
  }
}
