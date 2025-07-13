import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-full flex items-center justify-center p-8">
      <div class="text-center animate-fade-in">
        <div class="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h1 class="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent mb-4">
          Calendar
        </h1>
        <p class="text-xl text-gray-500 font-medium">Schedule and manage events</p>
      </div>
    </div>
  `,
})
export class CalendarComponent {}