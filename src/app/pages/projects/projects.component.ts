import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 animate-fade-in">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
          <p class="text-gray-600">Manage and track all your projects in one place.</p>
        </div>
        <button class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          New Project
        </button>
      </div>

      <!-- Project Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="card text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">12</div>
          <div class="text-gray-600">Total Projects</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">8</div>
          <div class="text-gray-600">Active</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-yellow-600 mb-2">3</div>
          <div class="text-gray-600">On Hold</div>
        </div>
        <div class="card text-center">
          <div class="text-3xl font-bold text-gray-600 mb-2">1</div>
          <div class="text-gray-600">Completed</div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let project of projects" class="card hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <div class="flex items-start justify-between mb-4">
            <div [class]="project.statusColor" class="px-3 py-1 rounded-full text-xs font-medium">
              {{ project.status }}
            </div>
            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ project.name }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
          
          <div class="flex items-center justify-between mb-4">
            <div class="flex -space-x-2">
              <div *ngFor="let member of project.team" 
                   [style.background-color]="member.color"
                   class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                {{ member.initials }}
              </div>
            </div>
            <span class="text-sm text-gray-500">{{ project.dueDate }}</span>
          </div>
          
          <div class="mb-2">
            <div class="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{{ project.progress }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div [style.width.%]="project.progress" [class]="project.progressColor" class="h-2 rounded-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Website Redesign',
      description: 'Complete overhaul of the company website with modern design and improved UX.',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      progress: 75,
      progressColor: 'bg-green-500',
      dueDate: 'Dec 15, 2024',
      team: [
        { initials: 'JD', color: '#3B82F6' },
        { initials: 'SM', color: '#10B981' },
        { initials: 'AL', color: '#F59E0B' }
      ]
    },
    {
      name: 'Mobile App Development',
      description: 'Native iOS and Android app for customer engagement and service delivery.',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      progress: 45,
      progressColor: 'bg-green-500',
      dueDate: 'Jan 30, 2025',
      team: [
        { initials: 'RK', color: '#8B5CF6' },
        { initials: 'MJ', color: '#EF4444' }
      ]
    },
    {
      name: 'Data Analytics Platform',
      description: 'Business intelligence dashboard for real-time data visualization and reporting.',
      status: 'On Hold',
      statusColor: 'bg-yellow-100 text-yellow-800',
      progress: 30,
      progressColor: 'bg-yellow-500',
      dueDate: 'Mar 15, 2025',
      team: [
        { initials: 'TP', color: '#06B6D4' },
        { initials: 'NK', color: '#84CC16' }
      ]
    },
    {
      name: 'Marketing Campaign',
      description: 'Q1 2025 digital marketing campaign across multiple channels and platforms.',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      progress: 90,
      progressColor: 'bg-green-500',
      dueDate: 'Dec 31, 2024',
      team: [
        { initials: 'LC', color: '#F97316' },
        { initials: 'DW', color: '#EC4899' },
        { initials: 'BH', color: '#6366F1' }
      ]
    },
    {
      name: 'API Integration',
      description: 'Third-party service integrations and API development for enhanced functionality.',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      progress: 60,
      progressColor: 'bg-green-500',
      dueDate: 'Feb 28, 2025',
      team: [
        { initials: 'GS', color: '#14B8A6' },
        { initials: 'HM', color: '#F59E0B' }
      ]
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment and implementation of security best practices.',
      status: 'Completed',
      statusColor: 'bg-gray-100 text-gray-800',
      progress: 100,
      progressColor: 'bg-gray-500',
      dueDate: 'Nov 30, 2024',
      team: [
        { initials: 'CS', color: '#7C3AED' }
      ]
    }
  ];
}