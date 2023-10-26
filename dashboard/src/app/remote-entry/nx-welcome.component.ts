import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app-nx-welcome',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit{

  listOfData: Array<{ name: string; age: number; address: string }> = [];
  
  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King`,
        age: 32,
        address: `LondonLondonLondonLondonLondon`
      });
    }
  }
}
