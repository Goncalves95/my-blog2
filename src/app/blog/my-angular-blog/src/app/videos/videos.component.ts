import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  age: number | null = null;

  checkAge() {
    const userAge = prompt("Please enter your age:");
    this.age = userAge ? parseInt(userAge) : null;
  }

  canAccessVideos(): boolean {
    return this.age !== null && this.age >= 18;
  }
}
