import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/*Components*/
import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './character/character.component';
import { StarshipsComponent } from './starships/starships.component';

/*Services*/
import { CharacterService } from './services/character.service';
import { StarshipService } from './services/starships.service';

/*Routes*/
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterComponent,
    StarshipsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [CharacterService, StarshipService],
  bootstrap: [AppComponent]
})

export class AppModule { }
