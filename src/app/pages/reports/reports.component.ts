import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-full flex items-center justify-center p-8">
      <div class="text-center animate-fade-in">
        <div class="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h1 class="text-6xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-800 bg-clip-text text-transparent mb-4">
          Reports
        </h1>
        <p class="text-xl text-gray-500 font-medium">Generate and view reports</p>
      </div>
    </div>
  `,
})
export class ReportsComponent {}