import { Component, Input, Type } from '@angular/core';
import {NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-tab',
  template: `
    <ng-container *ngComponentOutlet="component"></ng-container>`,
  imports: [
    NgComponentOutlet
  ],
  standalone: true
})
export class TabContainerComponent {
  @Input() component!: Type<any>;
}
