import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { RootFull } from '../root.resolver';

interface RootInfo {
  location: string;
  head: string;
  tail: string;
  token;
}

@Component({
  selector: 'cq-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  roots: RootInfo[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .subscribe(({root}) => {
        this.roots = root.
          map((r: RootFull) => {
            const {location, verse, token} = r;
            const [head, tail] = verse.split(token);
            return {location, token, head, tail};
          });
      });
  }
}