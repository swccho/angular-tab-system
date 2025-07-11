import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 animate-fade-in">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Team</h1>
          <p class="text-gray-600">Manage your team members and their roles within the organization.</p>
        </div>
        <button class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Invite Member
        </button>
      </div>

      <!-- Team Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="card text-center hover:shadow-lg transition-shadow duration-300">
          <div class="text-3xl font-bold text-primary-600 mb-2">12</div>
          <div class="text-gray-600">Total Members</div>
        </div>
        <div class="card text-center hover:shadow-lg transition-shadow duration-300">
          <div class="text-3xl font-bold text-green-600 mb-2">8</div>
          <div class="text-gray-600">Active Today</div>
        </div>
        <div class="card text-center hover:shadow-lg transition-shadow duration-300">
          <div class="text-3xl font-bold text-yellow-600 mb-2">4</div>
          <div class="text-gray-600">Departments</div>
        </div>
        <div class="card text-center hover:shadow-lg transition-shadow duration-300">
          <div class="text-3xl font-bold text-purple-600 mb-2">92%</div>
          <div class="text-gray-600">Avg. Performance</div>
        </div>
      </div>

      <!-- Team Members Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let member of teamMembers" class="card hover:shadow-lg transition-all duration-300 group">
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center space-x-3">
              <div [style.background-color]="member.color" 
                   class="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {{ member.initials }}
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">{{ member.name }}</h3>
                <p class="text-gray-600 text-sm">{{ member.role }}</p>
              </div>
            </div>
            <div [class]="member.statusColor" class="px-2 py-1 rounded-full text-xs font-medium">
              {{ member.status }}
            </div>
          </div>

          <div class="space-y-3 mb-4">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Department</span>
              <span class="font-medium text-gray-900">{{ member.department }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Projects</span>
              <span class="font-medium text-gray-900">{{ member.activeProjects }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Tasks Completed</span>
              <span class="font-medium text-gray-900">{{ member.tasksCompleted }}</span>
            </div>
          </div>

          <div class="mb-4">
            <div class="flex justify-between text-sm text-gray-600 mb-1">
              <span>Performance</span>
              <span>{{ member.performance }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div [style.width.%]="member.performance" 
                   [class]="getPerformanceColor(member.performance)" 
                   class="h-2 rounded-full transition-all duration-300"></div>
            </div>
          </div>

          <div class="flex space-x-2">
            <button class="flex-1 btn-secondary text-sm py-2">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Message
            </button>
            <button class="flex-1 btn-secondary text-sm py-2">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              View
            </button>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Recent Team Activity</h2>
        <div class="card">
          <div class="space-y-4">
            <div *ngFor="let activity of recentActivity" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div [style.background-color]="activity.memberColor" 
                   class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                {{ activity.memberInitials }}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900">{{ activity.action }}</p>
                <p class="text-sm text-gray-500">{{ activity.details }}</p>
                <p class="text-xs text-gray-400 mt-1">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'John Doe',
      initials: 'JD',
      role: 'Senior Developer',
      department: 'Engineering',
      color: '#3B82F6',
      status: 'Online',
      statusColor: 'bg-green-100 text-green-800',
      activeProjects: 3,
      tasksCompleted: 24,
      performance: 92
    },
    {
      name: 'Sarah Miller',
      initials: 'SM',
      role: 'UX Designer',
      department: 'Design',
      color: '#10B981',
      status: 'Online',
      statusColor: 'bg-green-100 text-green-800',
      activeProjects: 2,
      tasksCompleted: 18,
      performance: 88
    },
    {
      name: 'Alex Lee',
      initials: 'AL',
      role: 'DevOps Engineer',
      department: 'Engineering',
      color: '#F59E0B',
      status: 'Away',
      statusColor: 'bg-yellow-100 text-yellow-800',
      activeProjects: 4,
      tasksCompleted: 21,
      performance: 85
    },
    {
      name: 'Rachel Kim',
      initials: 'RK',
      role: 'Product Manager',
      department: 'Product',
      color: '#8B5CF6',
      status: 'Online',
      statusColor: 'bg-green-100 text-green-800',
      activeProjects: 5,
      tasksCompleted: 16,
      performance: 90
    },
    {
      name: 'Mike Johnson',
      initials: 'MJ',
      role: 'Backend Developer',
      department: 'Engineering',
      color: '#EF4444',
      status: 'Offline',
      statusColor: 'bg-gray-100 text-gray-800',
      activeProjects: 2,
      tasksCompleted: 19,
      performance: 87
    },
    {
      name: 'Lisa Chen',
      initials: 'LC',
      role: 'Marketing Manager',
      department: 'Marketing',
      color: '#F97316',
      status: 'Online',
      statusColor: 'bg-green-100 text-green-800',
      activeProjects: 3,
      tasksCompleted: 22,
      performance: 94
    },
    {
      name: 'David Wilson',
      initials: 'DW',
      role: 'QA Engineer',
      department: 'Engineering',
      color: '#EC4899',
      status: 'Away',
      statusColor: 'bg-yellow-100 text-yellow-800',
      activeProjects: 2,
      tasksCompleted: 15,
      performance: 83
    },
    {
      name: 'Emma Brown',
      initials: 'EB',
      role: 'UI Designer',
      department: 'Design',
      color: '#6366F1',
      status: 'Online',
      statusColor: 'bg-green-100 text-green-800',
      activeProjects: 3,
      tasksCompleted: 20,
      performance: 91
    },
    {
      name: 'Tom Parker',
      initials: 'TP',
      role: 'Data Analyst',
      department: 'Analytics',
      color: '#06B6D4',
      status: 'Online',
      statusColor: 'bg-green-100 text-green-800',
      activeProjects: 2,
      tasksCompleted: 17,
      performance: 89
    }
  ];

  recentActivity = [
    {
      memberInitials: 'JD',
      memberColor: '#3B82F6',
      action: 'John Doe completed task',
      details: 'Finished implementing user authentication system',
      time: '2 hours ago'
    },
    {
      memberInitials: 'SM',
      memberColor: '#10B981',
      action: 'Sarah Miller uploaded designs',
      details: 'Added new mockups for the mobile app interface',
      time: '4 hours ago'
    },
    {
      memberInitials: 'RK',
      memberColor: '#8B5CF6',
      action: 'Rachel Kim created project',
      details: 'Started new project: Customer Feedback System',
      time: '6 hours ago'
    },
    {
      memberInitials: 'LC',
      memberColor: '#F97316',
      action: 'Lisa Chen scheduled meeting',
      details: 'Q1 Marketing Strategy Review - Tomorrow at 2 PM',
      time: '8 hours ago'
    }
  ];

  getPerformanceColor(performance: number): string {
    if (performance >= 90) return 'bg-green-500';
    if (performance >= 80) return 'bg-yellow-500';
    if (performance >= 70) return 'bg-orange-500';
    return 'bg-red-500';
  }
}