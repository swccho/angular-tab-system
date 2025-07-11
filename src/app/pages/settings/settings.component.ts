import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 animate-fade-in">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p class="text-gray-600">Manage your account preferences and application settings.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Settings Navigation -->
        <div class="lg:col-span-1">
          <nav class="space-y-2">
            <button *ngFor="let section of settingSections"
                    (click)="activeSection = section.key"
                    [class]="activeSection === section.key ? 'bg-primary-100 text-primary-700 border-primary-200' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'"
                    class="w-full flex items-center px-4 py-3 text-left rounded-lg border transition-colors duration-200">
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="section.icon"></path>
              </svg>
              {{ section.label }}
            </button>
          </nav>
        </div>

        <!-- Settings Content -->
        <div class="lg:col-span-3">
          <!-- Profile Settings -->
          <div *ngIf="activeSection === 'profile'" class="space-y-6">
            <div class="card">
              <h2 class="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
              <div class="space-y-6">
                <div class="flex items-center space-x-6">
                  <div class="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                    JD
                  </div>
                  <div>
                    <button class="btn-secondary text-sm">Change Avatar</button>
                    <p class="text-gray-500 text-sm mt-1">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" value="John" class="input-field">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" value="Doe" class="input-field">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" value="john.doe@example.com" class="input-field">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" value="+1 (555) 123-4567" class="input-field">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea rows="4" class="input-field" placeholder="Tell us about yourself..."></textarea>
                </div>
                
                <div class="flex justify-end">
                  <button class="btn-primary">Save Changes</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Account Settings -->
          <div *ngIf="activeSection === 'account'" class="space-y-6">
            <div class="card">
              <h2 class="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input type="password" class="input-field">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input type="password" class="input-field">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input type="password" class="input-field">
                </div>
                <div class="flex justify-end">
                  <button class="btn-primary">Update Password</button>
                </div>
              </div>
            </div>

            <div class="card">
              <h2 class="text-xl font-semibold text-gray-900 mb-6">Two-Factor Authentication</h2>
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-medium text-gray-900">Enable 2FA</p>
                  <p class="text-gray-600 text-sm">Add an extra layer of security to your account</p>
                </div>
                <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Notifications Settings -->
          <div *ngIf="activeSection === 'notifications'" class="space-y-6">
            <div class="card">
              <h2 class="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
              <div class="space-y-6">
                <div *ngFor="let notification of notificationSettings" class="flex items-center justify-between">
                  <div>
                    <p class="font-medium text-gray-900">{{ notification.title }}</p>
                    <p class="text-gray-600 text-sm">{{ notification.description }}</p>
                  </div>
                  <button [class]="notification.enabled ? 'bg-primary-600' : 'bg-gray-200'" 
                          class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                    <span [class]="notification.enabled ? 'translate-x-6' : 'translate-x-1'" 
                          class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Privacy Settings -->
          <div *ngIf="activeSection === 'privacy'" class="space-y-6">
            <div class="card">
              <h2 class="text-xl font-semibold text-gray-900 mb-6">Privacy Settings</h2>
              <div class="space-y-6">
                <div *ngFor="let privacy of privacySettings" class="flex items-center justify-between">
                  <div>
                    <p class="font-medium text-gray-900">{{ privacy.title }}</p>
                    <p class="text-gray-600 text-sm">{{ privacy.description }}</p>
                  </div>
                  <button [class]="privacy.enabled ? 'bg-primary-600' : 'bg-gray-200'" 
                          class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                    <span [class]="privacy.enabled ? 'translate-x-6' : 'translate-x-1'" 
                          class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Appearance Settings -->
          <div *ngIf="activeSection === 'appearance'" class="space-y-6">
            <div class="card">
              <h2 class="text-xl font-semibold text-gray-900 mb-6">Appearance</h2>
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-3">Theme</label>
                  <div class="grid grid-cols-3 gap-3">
                    <button *ngFor="let theme of themes" 
                            [class]="selectedTheme === theme.key ? 'ring-2 ring-primary-500' : 'ring-1 ring-gray-200'"
                            class="p-4 rounded-lg border hover:border-primary-200 transition-colors duration-200">
                      <div [class]="theme.preview" class="w-full h-16 rounded mb-2"></div>
                      <p class="text-sm font-medium text-gray-900">{{ theme.name }}</p>
                    </button>
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-3">Font Size</label>
                  <select class="input-field">
                    <option>Small</option>
                    <option selected>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SettingsComponent {
  activeSection = 'profile';

  settingSections = [
    {
      key: 'profile',
      label: 'Profile',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>'
    },
    {
      key: 'account',
      label: 'Account',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>'
    },
    {
      key: 'notifications',
      label: 'Notifications',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM10.07 2.82l3.12 3.12M7.05 5.84l3.12 3.12M4.03 8.86l3.12 3.12M1.01 11.88l3.12 3.12"></path>'
    },
    {
      key: 'privacy',
      label: 'Privacy',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>'
    },
    {
      key: 'appearance',
      label: 'Appearance',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>'
    }
  ];

  notificationSettings = [
    {
      title: 'Email Notifications',
      description: 'Receive email updates about your projects and tasks',
      enabled: true
    },
    {
      title: 'Push Notifications',
      description: 'Get push notifications on your device',
      enabled: false
    },
    {
      title: 'Task Reminders',
      description: 'Receive reminders for upcoming task deadlines',
      enabled: true
    },
    {
      title: 'Team Updates',
      description: 'Get notified when team members complete tasks',
      enabled: true
    }
  ];

  privacySettings = [
    {
      title: 'Profile Visibility',
      description: 'Make your profile visible to other team members',
      enabled: true
    },
    {
      title: 'Activity Status',
      description: 'Show when you\'re online or active',
      enabled: false
    },
    {
      title: 'Data Analytics',
      description: 'Allow usage data to improve the application',
      enabled: true
    }
  ];

  themes = [
    {
      key: 'light',
      name: 'Light',
      preview: 'bg-gradient-to-br from-white to-gray-100'
    },
    {
      key: 'dark',
      name: 'Dark',
      preview: 'bg-gradient-to-br from-gray-800 to-gray-900'
    },
    {
      key: 'auto',
      name: 'Auto',
      preview: 'bg-gradient-to-br from-blue-100 to-purple-100'
    }
  ];

  selectedTheme = 'light';
}