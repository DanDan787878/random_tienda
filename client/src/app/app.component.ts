import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCComponent } from "./client/header-c/header-c.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
