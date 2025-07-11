import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 animate-fade-in">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Tasks</h1>
          <p class="text-gray-600">Stay organized and track your daily tasks efficiently.</p>
        </div>
        <button class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Add Task
        </button>
      </div>

      <!-- Task Filters -->
      <div class="flex space-x-4 mb-8">
        <button *ngFor="let filter of filters" 
                (click)="activeFilter = filter.key"
                [class]="activeFilter === filter.key ? 'bg-primary-100 text-primary-700 border-primary-200' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'"
                class="px-4 py-2 rounded-lg border font-medium transition-colors duration-200">
          {{ filter.label }}
          <span [class]="activeFilter === filter.key ? 'bg-primary-200 text-primary-800' : 'bg-gray-200 text-gray-600'"
                class="ml-2 px-2 py-1 rounded-full text-xs">
            {{ filter.count }}
          </span>
        </button>
      </div>

      <!-- Task List -->
      <div class="space-y-4">
        <div *ngFor="let task of getFilteredTasks()" 
             class="card hover:shadow-md transition-all duration-200 cursor-pointer group">
          <div class="flex items-start space-x-4">
            <!-- Checkbox -->
            <button (click)="toggleTask(task)" 
                    class="mt-1 flex-shrink-0">
              <div [class]="task.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-gray-400'"
                   class="w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200">
                <svg *ngIf="task.completed" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </button>

            <!-- Task Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <h3 [class]="task.completed ? 'line-through text-gray-500' : 'text-gray-900'"
                      class="font-medium mb-1">
                    {{ task.title }}
                  </h3>
                  <p class="text-gray-600 text-sm mb-3">{{ task.description }}</p>
                  
                  <div class="flex items-center space-x-4 text-sm text-gray-500">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {{ task.dueDate }}
                    </div>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                      {{ task.project }}
                    </div>
                  </div>
                </div>

                <div class="flex items-center space-x-2">
                  <span [class]="getPriorityColor(task.priority)"
                        class="px-2 py-1 rounded-full text-xs font-medium">
                    {{ task.priority }}
                  </span>
                  <div [style.background-color]="task.assignee.color"
                       class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {{ task.assignee.initials }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div *ngIf="getFilteredTasks().length === 0" class="text-center py-12">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
        <p class="text-gray-600">Get started by creating your first task.</p>
      </div>
    </div>
  `,
})
export class TaskComponent {
  activeFilter = 'all';

  filters = [
    { key: 'all', label: 'All Tasks', count: 15 },
    { key: 'pending', label: 'Pending', count: 8 },
    { key: 'completed', label: 'Completed', count: 7 },
    { key: 'high', label: 'High Priority', count: 3 }
  ];

  tasks = [
    {
      id: 1,
      title: 'Design homepage mockup',
      description: 'Create wireframes and high-fidelity mockups for the new homepage design',
      completed: false,
      priority: 'High',
      dueDate: 'Dec 20, 2024',
      project: 'Website Redesign',
      assignee: { initials: 'JD', color: '#3B82F6' }
    },
    {
      id: 2,
      title: 'Review API documentation',
      description: 'Go through the third-party API docs and identify integration points',
      completed: true,
      priority: 'Medium',
      dueDate: 'Dec 18, 2024',
      project: 'API Integration',
      assignee: { initials: 'SM', color: '#10B981' }
    },
    {
      id: 3,
      title: 'Setup CI/CD pipeline',
      description: 'Configure automated testing and deployment pipeline for the project',
      completed: false,
      priority: 'High',
      dueDate: 'Dec 22, 2024',
      project: 'DevOps',
      assignee: { initials: 'AL', color: '#F59E0B' }
    },
    {
      id: 4,
      title: 'User testing session',
      description: 'Conduct usability testing with 5 users for the mobile app prototype',
      completed: false,
      priority: 'Medium',
      dueDate: 'Dec 25, 2024',
      project: 'Mobile App',
      assignee: { initials: 'RK', color: '#8B5CF6' }
    },
    {
      id: 5,
      title: 'Database optimization',
      description: 'Optimize database queries and improve overall performance',
      completed: true,
      priority: 'Low',
      dueDate: 'Dec 15, 2024',
      project: 'Backend',
      assignee: { initials: 'MJ', color: '#EF4444' }
    },
    {
      id: 6,
      title: 'Content strategy meeting',
      description: 'Plan content calendar and strategy for Q1 2025 marketing campaign',
      completed: false,
      priority: 'Medium',
      dueDate: 'Dec 28, 2024',
      project: 'Marketing',
      assignee: { initials: 'LC', color: '#F97316' }
    },
    {
      id: 7,
      title: 'Security vulnerability scan',
      description: 'Run comprehensive security scan and address any identified issues',
      completed: true,
      priority: 'High',
      dueDate: 'Dec 12, 2024',
      project: 'Security',
      assignee: { initials: 'CS', color: '#7C3AED' }
    },
    {
      id: 8,
      title: 'Mobile app testing',
      description: 'Test mobile app functionality across different devices and OS versions',
      completed: false,
      priority: 'Medium',
      dueDate: 'Jan 5, 2025',
      project: 'Mobile App',
      assignee: { initials: 'TP', color: '#06B6D4' }
    }
  ];

  getFilteredTasks() {
    switch (this.activeFilter) {
      case 'pending':
        return this.tasks.filter(task => !task.completed);
      case 'completed':
        return this.tasks.filter(task => task.completed);
      case 'high':
        return this.tasks.filter(task => task.priority === 'High');
      default:
        return this.tasks;
    }
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  toggleTask(task: any) {
    task.completed = !task.completed;
  }
}