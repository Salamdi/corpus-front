import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LettersComponent } from './letters/letters.component';
import { RootListComponent } from './root-list/root-list.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

import { ApiService } from './api.service';
import { CorpusService } from './corpus.service';
import { RootListResolver } from './root-list.resolver';
import { RootComponent } from './root/root.component';
import { RootResolver } from './root.resolver';

@NgModule({
  declarations: [
    AppComponent,
    LettersComponent,
    RootListComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    CorpusService,
    RootListResolver,
    RootResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
