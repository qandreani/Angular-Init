import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from "./nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, NavComponent]
})
export class AppComponent {
  title = 'my-app';
}
