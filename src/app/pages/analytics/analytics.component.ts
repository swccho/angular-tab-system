import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 animate-fade-in">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p class="text-gray-600">Track performance metrics and gain insights into your projects.</p>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="card text-center hover:shadow-lg transition-shadow duration-300">
          <div class="text-3xl font-bold text-primary-600 mb-2">94%</div>
          <div class="text-gray-600 mb-1">Project Success Rate</div>
          <div class="text-sm text-green-600 flex items-center justify-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
            </svg>
            +5% from last month
          </div>
        </div>

        <div class="card text-center hover:shadow-lg transition-shadow duration-300">
          <div class="text-3xl font-bold text-green-600 mb-2">2.4</div>
          <div class="text-gray-600 mb-1">Avg. Tasks per Day</div>
          <div class="text-sm text-green-600 flex items-center justify-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
            </svg>
            +12% from last month
          </div>
        </div>

        <div class="card text-center hover:shadow-lg transition-shadow duration-300">
          <div class="text-3xl font-bold text-yellow-600 mb-2">18h</div>
          <div class="text-gray-600 mb-1">Avg. Project Duration</div>
          <div class="text-sm text-red-600 flex items-center justify-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6"></path>
            </svg>
            -8% from last month
          </div>
        </div>

        <div class="card text-center hover:shadow-lg transition-shadow duration-300">
          <div class="text-3xl font-bold text-purple-600 mb-2">87%</div>
          <div class="text-gray-600 mb-1">Team Productivity</div>
          <div class="text-sm text-green-600 flex items-center justify-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
            </svg>
            +3% from last month
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <!-- Project Progress Chart -->
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Project Progress Overview</h2>
          <div class="space-y-4">
            <div *ngFor="let project of projectProgress" class="flex items-center justify-between">
              <div class="flex-1">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm font-medium text-gray-700">{{ project.name }}</span>
                  <span class="text-sm text-gray-500">{{ project.progress }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div [style.width.%]="project.progress" 
                       [class]="project.color" 
                       class="h-2 rounded-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Performance -->
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Team Performance</h2>
          <div class="space-y-4">
            <div *ngFor="let member of teamPerformance" class="flex items-center space-x-4">
              <div [style.background-color]="member.color" 
                   class="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium">
                {{ member.initials }}
              </div>
              <div class="flex-1">
                <div class="flex justify-between items-center mb-1">
                  <span class="font-medium text-gray-900">{{ member.name }}</span>
                  <span class="text-sm text-gray-500">{{ member.tasksCompleted }} tasks</span>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex-1 bg-gray-200 rounded-full h-2">
                    <div [style.width.%]="member.efficiency" 
                         class="bg-green-500 h-2 rounded-full transition-all duration-500"></div>
                  </div>
                  <span class="text-sm text-gray-600">{{ member.efficiency }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Insights -->
      <div class="card">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Recent Insights</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let insight of insights" class="p-4 rounded-lg border border-gray-200 hover:border-primary-200 transition-colors duration-200">
            <div [class]="insight.iconBg" class="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="insight.icon"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ insight.title }}</h3>
            <p class="text-gray-600 text-sm">{{ insight.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AnalyticsComponent {
  projectProgress = [
    { name: 'Website Redesign', progress: 75, color: 'bg-primary-500' },
    { name: 'Mobile App', progress: 45, color: 'bg-green-500' },
    { name: 'Marketing Campaign', progress: 90, color: 'bg-yellow-500' },
    { name: 'API Integration', progress: 60, color: 'bg-purple-500' },
    { name: 'Data Platform', progress: 30, color: 'bg-red-500' }
  ];

  teamPerformance = [
    { name: 'John Doe', initials: 'JD', color: '#3B82F6', tasksCompleted: 24, efficiency: 92 },
    { name: 'Sarah Miller', initials: 'SM', color: '#10B981', tasksCompleted: 18, efficiency: 88 },
    { name: 'Alex Lee', initials: 'AL', color: '#F59E0B', tasksCompleted: 21, efficiency: 85 },
    { name: 'Rachel Kim', initials: 'RK', color: '#8B5CF6', tasksCompleted: 16, efficiency: 90 },
    { name: 'Mike Johnson', initials: 'MJ', color: '#EF4444', tasksCompleted: 19, efficiency: 87 }
  ];

  insights = [
    {
      title: 'Peak Productivity Hours',
      description: 'Your team is most productive between 10 AM - 12 PM. Consider scheduling important meetings during this time.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Project Bottlenecks',
      description: 'Design review process is taking 23% longer than average. Consider streamlining the approval workflow.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
      iconBg: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Resource Allocation',
      description: 'Frontend development tasks are 15% ahead of schedule. Consider reallocating resources to backend tasks.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>',
      iconBg: 'bg-green-100 text-green-600'
    }
  ];
}