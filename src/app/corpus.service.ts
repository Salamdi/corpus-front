import { Injectable } from "@angular/core";
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

export interface Char {
    arabic: string;
    buckwalter: string;
}

export interface Root {
    arabic: string;
    buckwalter: string;
}

@Injectable()
export class CorpusService {
    public chars$: BehaviorSubject<Char[]> = new BehaviorSubject([]);

    constructor(private api: ApiService) {
        this.getChars();
    }

    private getChars(): void {
        this.api.get$('chars')
            .subscribe((chars: Char[]) => this.chars$.next(chars));
    }
}
