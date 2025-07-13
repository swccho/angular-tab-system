import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-full flex items-center justify-center p-8">
      <div class="text-center animate-fade-in">
        <div class="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
        <h1 class="text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-800 bg-clip-text text-transparent mb-4">
          Analytics
        </h1>
        <p class="text-xl text-gray-500 font-medium">Track performance and insights</p>
      </div>
    </div>
  `,
})
export class AnalyticsComponent {}