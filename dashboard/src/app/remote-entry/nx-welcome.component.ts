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

export class NxWelcomeComponent implements OnInit{
  // isCollapsed = false;

  // constructor(private userService: UserService) {}
  isCollapsed = false;

  ngOnInit() {}
}
