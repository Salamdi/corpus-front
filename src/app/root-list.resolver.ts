import { Injectable } from "@angular/core";
import { Root } from './corpus.service';
import { take, mergeMap } from 'rxjs/operators';
import { Observable, of, EMPTY } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable()
export class RootListResolver implements Resolve<Root[]> {
  constructor(private api: ApiService, private router: Router) {}

  private getRoots(ch: string): Observable<Root[]> {
    const query = encodeURI(`\\${ch}`);
    return <Observable<Root[]>>this.api.get$(`roots?ch=${query}`);
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Root[]> | Observable<never> {
    let ch = route.paramMap.get('ch');
    return this.getRoots(ch).pipe(
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