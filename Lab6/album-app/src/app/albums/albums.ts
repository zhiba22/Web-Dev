import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html'
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  loading = true;
  error = '';

  constructor(private albumService: AlbumService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Failed to load: ' + err.message;
        this.loading = false;
        console.error(err);
      }
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }

  sortAlbums(order: 'asc' | 'desc'): void {
  this.albums = [...this.albums].sort((a, b) => {
    if (order === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
}
  // previousId(first: 'first'): void{
  //   this.albums = [...this.albums].sort((a,b) => {
  //     if(first === 'first'){
  //       return a.id.localeCompare(b.id);
  //     } else{
  //       return b.id.localeCompare(a.id);
  //     }
  //   });
  // }
}