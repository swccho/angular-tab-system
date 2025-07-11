import { Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {TaskComponent} from './pages/task/task.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TaskComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
