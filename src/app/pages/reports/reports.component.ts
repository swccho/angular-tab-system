import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 animate-fade-in">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Reports</h1>
          <p class="text-gray-600">Generate and view detailed reports on your projects and team performance.</p>
        </div>
        <button class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Generate Report
        </button>
      </div>

      <!-- Report Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div *ngFor="let category of reportCategories" 
             class="card hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <div [class]="category.iconBg" class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
            <svg class="w-6 h-6" [innerHTML]="category.icon"></svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ category.title }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ category.description }}</p>
          <div class="flex items-center text-primary-600 text-sm font-medium">
            <span>{{ category.count }} reports</span>
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Recent Reports -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <div class="card">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-semibold text-gray-900">Recent Reports</h2>
              <button class="text-primary-600 hover:text-primary-700 text-sm font-medium">View All</button>
            </div>
            
            <div class="space-y-4">
              <div *ngFor="let report of recentReports" 
                   class="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200 cursor-pointer group">
                <div class="flex items-center space-x-4">
                  <div [class]="report.iconBg" class="w-10 h-10 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5" [innerHTML]="report.icon"></svg>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900 group-hover:text-primary-700">{{ report.title }}</h3>
                    <p class="text-sm text-gray-500">{{ report.description }}</p>
                    <p class="text-xs text-gray-400 mt-1">Generated {{ report.date }}</p>
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <span [class]="report.statusColor" class="px-2 py-1 rounded-full text-xs font-medium">
                    {{ report.status }}
                  </span>
                  <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Report Templates -->
        <div class="space-y-6">
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Templates</h3>
            <div class="space-y-3">
              <button *ngFor="let template of reportTemplates" 
                      class="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-primary-200 hover:bg-primary-50 transition-colors duration-200 group">
                <div class="flex items-center space-x-3">
                  <div [class]="template.iconBg" class="w-8 h-8 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4" [innerHTML]="template.icon"></svg>
                  </div>
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 group-hover:text-primary-700">{{ template.name }}</p>
                    <p class="text-xs text-gray-500">{{ template.description }}</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <!-- Export Options -->
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Export Options</h3>
            <div class="space-y-2">
              <button class="w-full btn-secondary text-sm text-left">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Export as PDF
              </button>
              <button class="w-full btn-secondary text-sm text-left">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Export as Excel
              </button>
              <button class="w-full btn-secondary text-sm text-left">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Share via Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ReportsComponent {
  reportCategories = [
    {
      title: 'Project Reports',
      description: 'Detailed analysis of project progress and performance metrics.',
      count: 12,
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>',
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Team Performance',
      description: 'Individual and team productivity insights and analytics.',
      count: 8,
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>',
      iconBg: 'bg-green-100 text-green-600'
    },
    {
      title: 'Financial Reports',
      description: 'Budget tracking, expenses, and financial performance analysis.',
      count: 6,
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
      iconBg: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Time Tracking',
      description: 'Time allocation, productivity patterns, and efficiency metrics.',
      count: 15,
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
      iconBg: 'bg-purple-100 text-purple-600'
    }
  ];

  recentReports = [
    {
      title: 'Q4 2024 Project Summary',
      description: 'Comprehensive overview of all projects completed in Q4',
      date: '2 days ago',
      status: 'Ready',
      statusColor: 'bg-green-100 text-green-800',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>',
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Team Performance Analysis',
      description: 'Monthly productivity and efficiency metrics for all team members',
      date: '5 days ago',
      status: 'Processing',
      statusColor: 'bg-yellow-100 text-yellow-800',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>',
      iconBg: 'bg-green-100 text-green-600'
    },
    {
      title: 'Budget vs Actual Expenses',
      description: 'Financial comparison report for current fiscal year',
      date: '1 week ago',
      status: 'Ready',
      statusColor: 'bg-green-100 text-green-800',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
      iconBg: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Time Tracking Summary',
      description: 'Detailed breakdown of time spent across different projects',
      date: '2 weeks ago',
      status: 'Ready',
      statusColor: 'bg-green-100 text-green-800',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
      iconBg: 'bg-purple-100 text-purple-600'
    }
  ];

  reportTemplates = [
    {
      name: 'Weekly Status',
      description: 'Quick weekly progress summary',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>',
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Monthly Review',
      description: 'Comprehensive monthly analysis',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>',
      iconBg: 'bg-green-100 text-green-600'
    },
    {
      name: 'Custom Report',
      description: 'Build your own report template',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>',
      iconBg: 'bg-purple-100 text-purple-600'
    }
  ];
}