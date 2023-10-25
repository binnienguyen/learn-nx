import { Component } from '@angular/core';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})


export class AppComponent {
  title = 'host-app';
  theme = true

  // ngOnInit(): void {
  //   console.log('Componente de registro cargado');
  // }
}