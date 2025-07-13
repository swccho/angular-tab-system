import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<h2>Project Content</h2><p>Welcome to Project tab!</p>
  <input type="text" placeholder="add project content" />`,
  standalone: true,
})
export class ProjectsComponent {}
