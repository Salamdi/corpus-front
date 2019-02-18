import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LettersComponent } from './letters/letters.component';
import { RootListComponent } from './root-list/root-list.component';
import { RootListResolver } from './root-list.resolver';
import { RootResolver } from './root.resolver';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  { path: 'letters', component: LettersComponent, pathMatch: 'full' },
  {
    path: 'roots/:ch',
    component: RootListComponent,
    pathMatch: 'full',
    resolve: {
      roots: RootListResolver
    }
  },
  {
    path: 'root/:root',
    pathMatch: 'full',
    component: RootComponent,
    resolve: {
      root: RootResolver
    }
  },
  { path: '', redirectTo: 'letters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
