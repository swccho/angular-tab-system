import { Component } from '@angular/core';
import {TabHostComponent} from './components/tab-host/tab-host.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabHostComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
