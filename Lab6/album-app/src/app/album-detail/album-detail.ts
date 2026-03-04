import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html'
})
export class AlbumDetailComponent implements OnInit {

  album!: Album;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.editedTitle = data.title;
    });
  }

  save() {
    const updated = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updated).subscribe(() => {
      this.album.title = this.editedTitle;
      alert('Saved!');
    });
  }
}
