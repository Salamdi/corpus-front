import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Root } from '../corpus.service';

@Component({
    selector: 'cq-root-list',
    templateUrl: './root-list.component.html',
    styleUrls: ['./root-list.component.scss']
})
export class RootListComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }
    public roots: Root[] = [];

    ngOnInit() {
        this.route.data
            .subscribe(({ roots }) => {
                this.roots = roots
                    .map((r: Root) => r.arabic)
                    .sort()
                    .map((r: string) => {
                        const {arabic, buckwalter} = roots.find((x: Root) => x.arabic === r);
                        return {buckwalter, arabic: arabic.split('').join(' ')};
                    });
            });
    }
}
