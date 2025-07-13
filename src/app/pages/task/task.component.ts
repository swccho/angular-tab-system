import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<h2>Task Content</h2><p>Welcome to Task tab!</p>
  <input type="text" placeholder="add task content" />`,
  standalone: true,
})
export class TaskComponent {}
