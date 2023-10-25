import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})


export class AppComponent {
  isCollapsed = false;

  constructor(private router: Router) {}

  isSelected(route: string): boolean {
    return route === this.router.url;
  }

  // ngOnInit(): void {
  //   console.log('Componente de registro cargado');
  // }
}
