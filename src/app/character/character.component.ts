import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-character',
  templateUrl:  './character.component.html',
  styleUrls: ['./character.component.scss']
})

export class CharacterComponent implements OnInit {
  sub: any;
  character: Character;

  constructor(private characterService: CharacterService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.characterService
        .get(id)
        .subscribe(c => this.character = c);
    }); 
  }

}
