import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TaskComponent } from './pages/task/task.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TeamComponent } from './pages/team/team.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ReportsComponent } from './pages/reports/reports.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];