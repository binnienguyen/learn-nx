import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'my-app-nx-welcome',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent{

  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
