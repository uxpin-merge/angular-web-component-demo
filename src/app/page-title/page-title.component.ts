import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'cm-page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
    @Input() pageName: string;
    constructor() { }

    ngOnInit() {
    }
}
