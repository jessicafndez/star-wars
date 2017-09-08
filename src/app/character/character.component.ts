import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  template: `
    <p>
      character Works!
    </p>
  `,
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
