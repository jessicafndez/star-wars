import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/*Services*/
import { CharacterService } from '../services/character.service';

/*Interfaces*/
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService
      .getAll()
      .subscribe(c=>this.characters = c);
  }


}
