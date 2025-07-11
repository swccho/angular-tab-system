import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 animate-fade-in">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Calendar</h1>
          <p class="text-gray-600">Schedule and manage your meetings, deadlines, and events.</p>
        </div>
        <button class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          New Event
        </button>
      </div>

      <!-- Calendar Navigation -->
      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center space-x-4">
          <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h2 class="text-2xl font-semibold text-gray-900">December 2024</h2>
          <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div class="flex space-x-2">
          <button class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            Month
          </button>
          <button class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            Week
          </button>
          <button class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            Day
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Calendar Grid -->
        <div class="lg:col-span-3">
          <div class="card p-0 overflow-hidden">
            <!-- Calendar Header -->
            <div class="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
              <div *ngFor="let day of weekDays" class="p-4 text-center text-sm font-medium text-gray-700">
                {{ day }}
              </div>
            </div>
            
            <!-- Calendar Body -->
            <div class="grid grid-cols-7">
              <div *ngFor="let date of calendarDates" 
                   [class]="getDateClasses(date)"
                   class="min-h-[120px] p-2 border-r border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                <div class="flex justify-between items-start mb-2">
                  <span [class]="date.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'" 
                        class="text-sm font-medium">
                    {{ date.day }}
                  </span>
                  <div *ngIf="date.hasEvents" class="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                
                <div class="space-y-1">
                  <div *ngFor="let event of date.events" 
                       [class]="event.color"
                       class="text-xs px-2 py-1 rounded text-white truncate">
                    {{ event.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Today's Events -->
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Today's Events</h3>
            <div class="space-y-3">
              <div *ngFor="let event of todaysEvents" class="flex items-start space-x-3">
                <div [class]="event.color" class="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"></div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900">{{ event.title }}</p>
                  <p class="text-xs text-gray-500">{{ event.time }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Upcoming Deadlines -->
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
            <div class="space-y-3">
              <div *ngFor="let deadline of upcomingDeadlines" class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900">{{ deadline.title }}</p>
                  <p class="text-xs text-gray-500">{{ deadline.date }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div class="space-y-2">
              <button class="w-full btn-secondary text-sm text-left">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Schedule Meeting
              </button>
              <button class="w-full btn-secondary text-sm text-left">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Set Reminder
              </button>
              <button class="w-full btn-secondary text-sm text-left">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
                Add Deadline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CalendarComponent {
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  calendarDates = this.generateCalendarDates();
  
  todaysEvents = [
    { title: 'Team Standup', time: '9:00 AM', color: 'bg-blue-500' },
    { title: 'Design Review', time: '2:00 PM', color: 'bg-green-500' },
    { title: 'Client Call', time: '4:30 PM', color: 'bg-purple-500' }
  ];

  upcomingDeadlines = [
    { title: 'Website Redesign', date: 'Dec 20, 2024' },
    { title: 'Mobile App Beta', date: 'Dec 25, 2024' },
    { title: 'Marketing Campaign', date: 'Dec 31, 2024' }
  ];

  generateCalendarDates() {
    const dates = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Get first day of month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    // Add previous month's trailing days
    const prevMonth = new Date(currentYear, currentMonth - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      dates.push({
        day: prevMonth.getDate() - i,
        isCurrentMonth: false,
        isToday: false,
        hasEvents: false,
        events: []
      });
    }
    
    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
      const hasEvents = Math.random() > 0.7; // Random events for demo
      const events = hasEvents ? this.generateRandomEvents() : [];
      
      dates.push({
        day,
        isCurrentMonth: true,
        isToday,
        hasEvents,
        events
      });
    }
    
    // Add next month's leading days to fill the grid
    const remainingCells = 42 - dates.length; // 6 rows × 7 days
    for (let day = 1; day <= remainingCells; day++) {
      dates.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        hasEvents: false,
        events: []
      });
    }
    
    return dates;
  }

  generateRandomEvents() {
    const eventTypes = [
      { title: 'Meeting', color: 'bg-blue-500 text-white' },
      { title: 'Deadline', color: 'bg-red-500 text-white' },
      { title: 'Review', color: 'bg-green-500 text-white' },
      { title: 'Call', color: 'bg-purple-500 text-white' }
    ];
    
    const numEvents = Math.floor(Math.random() * 3) + 1;
    const events = [];
    
    for (let i = 0; i < numEvents; i++) {
      const randomEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      events.push(randomEvent);
    }
    
    return events;
  }

  getDateClasses(date: any): string {
    let classes = '';
    if (date.isToday) {
      classes += 'bg-primary-50 border-primary-200 ';
    }
    return classes;
  }
}