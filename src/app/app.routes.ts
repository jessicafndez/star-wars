import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';

export const routes: Routes = [
    { path: 'characters', component: CharactersListComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);