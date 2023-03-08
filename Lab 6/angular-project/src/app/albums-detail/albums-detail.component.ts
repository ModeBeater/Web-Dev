import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../module';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumsDetailComponent {
  album: Album;
  newAlbum: Album;
  id: number | undefined;
  constructor(private route: ActivatedRoute, private albumService: AlbumService){
    this.album = {} as Album;
    this.newAlbum = {} as Album;
  }
  ngOnInit(): void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(this.id).subscribe((album) => this.album = album);
  }
  changeTitle(){
    this.album.title = this.newAlbum.title;
    this.albumService.updateAlbum(this.album).subscribe((album) => this.album = album);
    this.newAlbum = this.album;
  }
}
