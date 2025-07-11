import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { TabService } from '../../services/tab.service';
import { TabContainerComponent } from '../tab-container/tab-container.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { TaskComponent } from '../../pages/task/task.component';

@Component({
  selector: 'app-tab-host',
  standalone: true,
  imports: [CommonModule, TabContainerComponent],
  template: `
    <div class="container">
      <nav class="sidenav">
        <button (click)="openTab('dashboard')">Dashboard</button>
        <button (click)="openTab('projects')">Projects</button>
        <button (click)="openTab('tasks')">Tasks</button>
        <button (click)="openNewTab()">+ New Tab</button>
      </nav>
      <main class="tab-area">
        <div class="tab-bar">
          <button
            *ngFor="let tab of tabs()"
            (click)="setActive(tab.id)"
            [class.active]="activeTabId() === tab.id"
          >
            {{ tab.title }}
            <span (click)="closeTab(tab.id)" class="close-btn">×</span>
          </button>
        </div>
        <div class="tab-content">
          <ng-container *ngFor="let tab of tabs()">
            <div [style.display]="activeTabId() === tab.id ? 'block' : 'none'">
              <app-tab [component]="tab.component"></app-tab>
            </div>
          </ng-container>
        </div>
      </main>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        height: 100vh;
      }
      .sidenav {
        width: 200px;
        background: #f4f4f4;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .sidenav button {
        padding: 8px 12px;
        cursor: pointer;
        border: none;
        background: #ddd;
        border-radius: 4px;
        font-weight: bold;
      }
      .tab-area {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .tab-bar {
        display: flex;
        gap: 8px;
        border-bottom: 1px solid #ccc;
        padding: 8px;
        background: #fff;
      }
      .tab-bar button {
        position: relative;
        padding: 4px 12px;
        cursor: pointer;
        background: none;
        border: none;
        font-weight: bold;
      }
      .tab-bar button.active {
        border-bottom: 2px solid blue;
        color: blue;
      }
      .close-btn {
        margin-left: 8px;
        cursor: pointer;
        color: red;
        font-weight: normal;
      }
      .tab-content {
        padding: 16px;
        background: white;
        flex: 1;
        overflow: auto;
      }
    `,
  ],
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
    // Subscribe to route changes to open/activate tabs based on URL
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const nav = event as NavigationEnd;
        const page = nav.urlAfterRedirects.replace('/', '') || 'dashboard';
        this.openOrActivateTab(page);
      });

    // On initial load, ensure a tab is open (in case route is empty)
    const initialPage = this.router.url.replace('/', '') || 'dashboard';
    this.openOrActivateTab(initialPage);
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
      title: `Tab ${this.tabCount}`,
      component: DashboardComponent,
    });
    this.setActive(`tab-${this.tabCount}`);
    // Optional: update route if you want to sync new tabs to URL
  }

  setActive(id: string) {
    this.tabService.setActiveTab(id);
  }

  closeTab(id: string) {
    this.tabService.closeTab(id);
  }
}
