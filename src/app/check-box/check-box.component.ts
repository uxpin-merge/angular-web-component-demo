import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckboxMode, CheckboxSize, MultiType, CheckboxColorMode } from '../enums/checkbox.enum';

/**
 * USAGE
 * 
 * BASIC USAGE
 * <xs-check-box [checked]="checked" (onChange)="checkItem($event)"></xs-check-box>
 * 
 * FOR CheckboxMode, CheckboxSize, MultiType, CheckboxColorMode, import enums to be used into respective .ts files.
 * 
 * IF CHECKBOX IS OF SINGLE SELCTION TYPE
 * <xs-check-box [mode]="checkboxMode.NORMAL" [checked]="checked" (onChange)="checkItem($event)"></xs-check-box>
 * 
 * IF CHECKBOX IS OF MULTISELECTION TYPE
 * <xs-check-box [mode]="checkboxMode.MULTI" [multiType]="multiSelectMode" (onChange)="checkAllAction()"></xs-check-box>
 * 
 * TO CHANGE CHECKBOX SIZE
 * <xs-check-box [size]="checkboxSize.SMALL" [checked]="checked" (onChange)="checkItem($event)">
 * </xs-check-box>
 * 
 * TO CHANGE CHECKBOX LABEL
 * <xs-check-box [label]="label" [checked]="checked" (onChange)="checkItem($event)"></xs-check-box>
 * 
 * TO DISABLE CHECKBOX
 * <xs-check-box [label]="label" [checked]="checked" [disabled]="true"></xs-check-box>
 * 
 * TO VERTICALLY ALIGN THE CHECKBOX
 * <xs-check-box [verticalAlign]="true" [checked]="checked" (onChange)="checkItem($event)"></xs-check-box>
 * 
 * TO CHANGE CHECKBOX COLOR MODE
 * <xs-check-box [cbColorMode]="checkboxColormode.LIGHT" [checked]="checked" (onChange)="checkItem($event)"></xs-check-box>
 */

@Component({
    selector: 'ct-check-box',
    templateUrl: './check-box.component.html',
    styleUrls: ['./check-box.component.scss']
})

export class CheckBoxComponent implements OnInit {
    // mode normal checkbox
    @Input() mode: CheckboxMode = CheckboxMode.NORMAL; // NORMAL or MULTI
    // multi type FULL/PARTIAL/NONE
    @Input() multiType: MultiType = MultiType.NONE;
    // size of checkbox small|medium|large
    @Input() size: CheckboxSize = CheckboxSize.MEDIUM;
    // Checked or not
    @Input() checked: boolean;
    // display text
    @Input() label: string;
    // Disable checkbox
    @Input() disabled: boolean;
    // VerticalAlign checkbox
    @Input() verticalAlign: boolean = false;
    // Checkbox color/style mode
    @Input() cbColorMode: CheckboxColorMode = CheckboxColorMode.NORMAL;
    // select all options
    // Change event in checkbox checked
    @Output() onChange = new EventEmitter<any>();

    constructor() { }
    ngOnInit() {
        if (this.multiType === MultiType.FULL) {
            this.checked = true;
        }
    }

    public get checkboxMode(): typeof CheckboxMode {
        return CheckboxMode;
    }
    public get checkboxMultitype(): typeof MultiType {
        return MultiType;
    }
    public get checkboxSize(): typeof CheckboxSize {
        return CheckboxSize;
    }
    public get checkboxColorMode(): typeof CheckboxColorMode {
        return CheckboxColorMode;
    }

    // Trigger change
    triggerChange(change) {
        if (!this.disabled) {
            change.mode = this.mode;
            change.multiType = this.multiType;
            this.checked = !this.checked;
            change.checked = this.checked;
            this.onChange.emit(change);
            change.stopPropagation();
        }
    }
}
