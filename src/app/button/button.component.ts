import { Component, Input } from '@angular/core';

type ButtonType = 'button' | 'icon';

@Component({
    selector: 'app-button',
    styleUrls: ['./button.component.scss'],
    templateUrl: './button.component.html'
})
export class ButtonComponent {
    @Input() label = '<No label>';
    @Input() prefixIcon = '';
    @Input() type: ButtonType = 'button';

    // Show disabled view but allow click event to propagate
    @Input() disableView = false;

    // Show disabled view and prevent click event propagation
    @Input() disableClick = false;
    @Input() permissions;

    public handleClick(event: MouseEvent) {
        if (this.disableClick) {
            event.stopPropagation();
        }
    }
}
