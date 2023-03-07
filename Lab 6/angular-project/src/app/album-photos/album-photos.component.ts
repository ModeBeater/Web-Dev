import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Photo } from '../module';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  albumPhoto: Photo[];
  id: number | undefined;
  constructor(private route: ActivatedRoute, private albumService: AlbumService){
    this.albumPhoto = [];
  }
  ngOnInit(): void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.id).subscribe((albumPhoto) => this.albumPhoto = albumPhoto);
  }
}
