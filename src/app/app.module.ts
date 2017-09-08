import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/*Components*/
import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './character/character.component';

/*Services*/
import { CharacterService } from './services/character.service';

/*Routes*/
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
