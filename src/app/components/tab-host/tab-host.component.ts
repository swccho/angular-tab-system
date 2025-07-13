import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { TabService } from '../../services/tab.service';
import { TabContainerComponent } from '../tab-container/tab-container.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { TaskComponent } from '../../pages/task/task.component';
import { AnalyticsComponent } from '../../pages/analytics/analytics.component';
import { SettingsComponent } from '../../pages/settings/settings.component';
import { TeamComponent } from '../../pages/team/team.component';
import { CalendarComponent } from '../../pages/calendar/calendar.component';
import { ReportsComponent } from '../../pages/reports/reports.component';

@Component({
  selector: 'app-tab-host',
  standalone: true,
  imports: [CommonModule, TabContainerComponent],
  template: `
    <div class="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <!-- Sidebar Navigation -->
      <nav class="w-72 bg-white/80 backdrop-blur-xl shadow-2xl border-r border-gray-200/50">
        <!-- Logo Section -->
        <div class="p-8 border-b border-gray-200/50">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl shadow-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Workspace
              </h1>
              <p class="text-sm text-gray-500 font-medium">Project Management</p>
            </div>
          </div>
        </div>
        
        <!-- Navigation Items -->
        <div class="p-6 space-y-2">
          <button 
            (click)="openTab('dashboard')"
            [class]="isActiveRoute('dashboard') ? 'nav-item nav-item-active' : 'nav-item'"
          >
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
              </svg>
            </div>
            <span class="text-base">Dashboard</span>
          </button>
          
          <button 
            (click)="openTab('projects')"
            [class]="isActiveRoute('projects') ? 'nav-item nav-item-active' : 'nav-item'"
          >
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <span class="text-base">Projects</span>
          </button>
          
          <button 
            (click)="openTab('tasks')"
            [class]="isActiveRoute('tasks') ? 'nav-item nav-item-active' : 'nav-item'"
          >
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <span class="text-base">Tasks</span>
          </button>
          
          <button 
            (click)="openTab('analytics')"
            [class]="isActiveRoute('analytics') ? 'nav-item nav-item-active' : 'nav-item'"
          >
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <span class="text-base">Analytics</span>
          </button>
          
          <button 
            (click)="openTab('team')"
            [class]="isActiveRoute('team') ? 'nav-item nav-item-active' : 'nav-item'"
          >
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <span class="text-base">Team</span>
          </button>
          
          <button 
            (click)="openTab('calendar')"
            [class]="isActiveRoute('calendar') ? 'nav-item nav-item-active' : 'nav-item'"
          >
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <span class="text-base">Calendar</span>
          </button>
          
          <button 
            (click)="openTab('reports')"
            [class]="isActiveRoute('reports') ? 'nav-item nav-item-active' : 'nav-item'"
          >
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <span class="text-base">Reports</span>
          </button>
          
          <button 
            (click)="openTab('settings')"
            [class]="isActiveRoute('settings') ? 'nav-item nav-item-active' : 'nav-item'"
          >
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <span class="text-base">Settings</span>
          </button>
        </div>
        
        <!-- New Tab Button -->
        <div class="absolute bottom-6 left-6 right-6">
          <button 
            (click)="openNewTab()"
            class="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-2xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            New Tab
          </button>
        </div>
      </nav>
      
      <!-- Main Content Area -->
      <main class="flex-1 flex flex-col overflow-hidden">
        <!-- Tab Bar -->
        <div class="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 px-8 py-4 shadow-sm">
          <div class="flex items-center space-x-3 overflow-x-auto">
            <button
              *ngFor="let tab of tabs(); trackBy: trackByTabId"
              (click)="setActive(tab.id)"
              [class]="getTabClasses(tab.id)"
            >
              <span class="font-semibold">{{ tab.title }}</span>
              <button 
                (click)="closeTab(tab.id); $event.stopPropagation()"
                class="ml-3 p-1.5 rounded-full hover:bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </button>
          </div>
        </div>
        
        <!-- Tab Content -->
        <div class="flex-1 overflow-auto">
          <div class="h-full">
            <ng-container *ngFor="let tab of tabs(); trackBy: trackByTabId">
              <div 
                [style.display]="activeTabId() === tab.id ? 'block' : 'none'"
                class="h-full animate-fade-in"
              >
                <app-tab [component]="tab.component"></app-tab>
              </div>
            </ng-container>
          </div>
        </div>
      </main>
    </div>
  `,
})
export class TabHostComponent implements OnInit {
  constructor(private tabService: TabService, private router: Router) {}

  get tabs() {
    return this.tabService.tabs$;
  }

  get activeTabId() {
    return this.tabService.activeTabId$;
  }

  tabCount = 0;

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const nav = event as NavigationEnd;
        const page = nav.urlAfterRedirects.replace('/', '') || 'dashboard';
        this.openOrActivateTab(page);
      });

    const initialPage = this.router.url.replace('/', '') || 'dashboard';
    this.openOrActivateTab(initialPage);
  }

  trackByTabId(index: number, tab: any) {
    return tab.id;
  }

  isActiveRoute(route: string): boolean {
    return this.activeTabId() === route;
  }

  getTabClasses(tabId: string): string {
    const isActive = this.activeTabId() === tabId;
    return isActive 
      ? 'tab-button tab-button-active' 
      : 'tab-button tab-button-inactive';
  }

  openOrActivateTab(page: string) {
    const tab = this.tabs().find((t) => t.id === page);

    let component;
    let title;

    switch (page) {
      case 'dashboard':
        component = DashboardComponent;
        title = 'Dashboard';
        break;
      case 'projects':
        component = ProjectsComponent;
        title = 'Projects';
        break;
      case 'tasks':
        component = TaskComponent;
        title = 'Tasks';
        break;
      case 'analytics':
        component = AnalyticsComponent;
        title = 'Analytics';
        break;
      case 'team':
        component = TeamComponent;
        title = 'Team';
        break;
      case 'calendar':
        component = CalendarComponent;
        title = 'Calendar';
        break;
      case 'reports':
        component = ReportsComponent;
        title = 'Reports';
        break;
      case 'settings':
        component = SettingsComponent;
        title = 'Settings';
        break;
      default:
        component = DashboardComponent;
        title = 'Dashboard';
    }

    if (tab) {
      this.setActive(tab.id);
    } else {
      this.tabService.openTab({
        id: page,
        title,
        component,
      });
      this.setActive(page);
    }
  }

  openTab(page: string) {
    this.router.navigate([page]);
  }

  openNewTab() {
    this.tabCount++;
    this.tabService.openTab({
      id: `tab-${this.tabCount}`,
      title: `New Tab ${this.tabCount}`,
      component: DashboardComponent,
    });
    this.setActive(`tab-${this.tabCount}`);
  }

  setActive(id: string) {
    this.tabService.setActiveTab(id);
  }

  closeTab(id: string) {
    this.tabService.closeTab(id);
  }
}