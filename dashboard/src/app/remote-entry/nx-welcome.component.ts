import {Component, OnInit} from '@angular/core';

interface Security {
  id: number;
  name: string;
  desc: string;
}

interface Inbound {
  ip_version: string;
  protocol: string;
  port_range: string;
  remote: string;
}

@Component({
  selector: 'my-app-nx-welcome',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})

export class NxWelcomeComponent implements OnInit{

  selectedValue?: Security;
  options: Security[] = [
    { name: 'Security 1', id: 1, desc: '' },
    { name: 'Security 2', id: 2, desc:''},
    { name: 'Security 3', id: 3, desc:"" },
  ];

  listInbound: Inbound[] = [
    { ip_version: 'ipV4', protocol: 'tcp', port_range: '1', remote: 'Test 1'},
    { ip_version: 'ipV4', protocol: 'tcp', port_range: '2', remote: 'Test 1'},
    { ip_version: 'ipV4', protocol: 'tcp', port_range: '2', remote: 'Test 1'},
    { ip_version: 'ipV4', protocol: 'tcp', port_range: '3', remote: 'Test 1'},
    { ip_version: 'ipV4', protocol: 'tcp', port_range: '3', remote: 'Test 1'},
  ]
  onSelectChange(): void {
    console.log('Selected value: ' + this.selectedValue);
  }

  inputValue?: string
  ngOnInit() {}
}
