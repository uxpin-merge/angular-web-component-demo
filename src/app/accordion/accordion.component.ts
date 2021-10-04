import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-accordion',
    styleUrls: ['./accordion.component.scss'],
    templateUrl: './accordion.component.html'
})
export class AccordionComponent implements OnChanges {
    @Input() title = '<No Title>';
    @Input() htmlTitle
    @Input() orientLeft = true;
    @Input() defaultOpen = false;
    @Input() singleOpen = false;
    @Output() onExpand = new EventEmitter();
    @Output() onCollapse = new EventEmitter();
    private static lastExpaned = null;
    public open = false;

    public ngOnChanges(changes) {
        if (changes.hasOwnProperty('defaultOpen')) {
            this.open = this.defaultOpen;
        }
    }

    /**
     * Toggle the accordion panel
     */
    public toggleOpen() {
        this.open = !this.open;
        if (this.open) {
            if (this.singleOpen) {
                this.singletonOpen();
            }
            this.onExpand.emit();
        } else {
            if (this.singleOpen) {
                this.singletonCollapse();
            }
            this.onCollapse.emit();
        }
    }

    private singletonOpen() {
        if (AccordionComponent.lastExpaned) {
            AccordionComponent.lastExpaned.open = false;

        }
        AccordionComponent.lastExpaned = this;
    }


    private singletonCollapse() {
        AccordionComponent.lastExpaned = null;
    }
}
