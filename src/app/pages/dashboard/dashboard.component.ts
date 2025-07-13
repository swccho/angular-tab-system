import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard Content</h2><p>Welcome to dashboard tab!</p>
    <input type="text" placeholder="add dashboard content" />
  `,
  standalone: true,
})
export class DashboardComponent {}
