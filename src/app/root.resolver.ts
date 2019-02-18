import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';
import { Observable, of, EMPTY } from 'rxjs';
import { Root } from './corpus.service';
import { take, mergeMap } from 'rxjs/operators';

export interface RootFull {
  location: string;
  verse: string;
  token: string;
}

@Injectable()
export class RootResolver implements Resolve<RootFull> {
  constructor(private api: ApiService, private router: Router) { }

  private getRoot(root: string): Observable<RootFull> {
    const query = encodeURI(`\\${root.split('').join('\\')}`);
    return <Observable<RootFull>>this.api.get$(`root?root=${query}`);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RootFull> | Observable<never> {
    let root = route.paramMap.get('root');
    return this.getRoot(root).pipe(
      take(1),
      mergeMap(roots => {
        if (roots) {
          return of(roots);
        } else {
          this.router.navigateByUrl('/letters');
          return EMPTY;
        }
      })
    );
  }
}