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
  newTitle: string;
  id: number | undefined;
  // inputValue =<HTMLInputElement>document.getElementById('newText');
  inputValue = localStorage.getItem('newText');
  // inputValue = <HTMLInputElement>document.getElementById('newTitle');
  constructor(private route: ActivatedRoute, private albumService: AlbumService){
    this.album = {} as Album;
    this.newTitle = "";
  }
  ngOnInit(): void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(this.id).subscribe((album) => this.album = album);
  }
  changeTitle(){
    if(this.inputValue != null){
      alert(this.inputValue.valueOf)
    }
    if(this.inputValue){
      this.newTitle = JSON.parse(this.inputValue)
    }
    this.album.title = this.newTitle;
  }
}
