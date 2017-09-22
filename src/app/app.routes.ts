import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './character/character.component';

export const routes: Routes = [
    { path: '', component: CharactersListComponent }, 
    { path: 'characters', component: CharactersListComponent },
    { path: 'character/:id', component: CharacterComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);