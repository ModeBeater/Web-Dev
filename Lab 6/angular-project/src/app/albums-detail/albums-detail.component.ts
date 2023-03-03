import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../module';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumsDetailComponent {
  // album: Album;
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
