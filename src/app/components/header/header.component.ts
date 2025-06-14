import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Fix typo here
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
