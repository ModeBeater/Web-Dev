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
  newAlbum: Album;
  constructor(private albumService: AlbumService){
    this.albums = [];
    this.newAlbum = {} as Album;
  }
  ngOnInit(): void{
    this.getAlbums();
  }
  getAlbums(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album) => this.albums.push(album));
    this.newAlbum = {} as Album;
  }
  delete(id:number){
    this.albumService.deleteAlbum(id).subscribe();
    this.albums = this.albums.filter(i => i.id != id);
  }
}
