import { Component, OnInit, OnDestroy } from '@angular/core';
import { CorpusService, Char } from '../corpus.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'cq-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent {
  title = 'corpus-quran';
  public chars$: Observable<Char[]>;

  constructor(private corpusService: CorpusService) {
    this.chars$ = this.corpusService
      .chars$
      .asObservable();
  }
}
