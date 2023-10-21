import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // q1
  Roll_No: number = 27;
  Name: string = 'Dharam Makwana';
  dob: Date = new Date('2001-01-22');

  // q2
  fruits: Array<string> = ['Bitcoin', 'Etherium', 'Dodge Coin', 'Pii'];

  // q3
  selectedNum = {};
  num = [
    { id: 1, name: 'Zayn' },
    { id: 2, name: 'Liam' },
    { id: 3, name: 'Harry' },
    { id: 4, name: 'Louis' },
    { id: 5, name: 'Nial' },
  ];

  popUp() {
    alert(this.selectedNum);
  }

  // q4
  selectedInput = '';
  input: Array<string> = ['textBox', 'textArea'];
}
