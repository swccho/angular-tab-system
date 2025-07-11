import { Injectable, signal, computed } from '@angular/core';
import { TabItem } from '../models/tab-item.model';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private tabs = signal<TabItem[]>([]);
  private activeTabId = signal<string | null>(null);

  // Expose readonly signals
  tabs$ = computed(() => this.tabs());
  activeTabId$ = computed(() => this.activeTabId());

  get activeTab() {
    return computed(() => this.tabs().find(tab => tab.id === this.activeTabId()));
  }

  openTab(tab: TabItem) {
    if (!this.tabs().some(t => t.id === tab.id)) {
      this.tabs.update(tabs => [...tabs, tab]);
    }
    this.activeTabId.set(tab.id);
  }

  closeTab(id: string) {
    this.tabs.update(tabs => tabs.filter(t => t.id !== id));
    if (this.activeTabId() === id) {
      const remaining = this.tabs();
      this.activeTabId.set(remaining.length ? remaining[remaining.length - 1].id : null);
    }
  }

  setActiveTab(id: string) {
    this.activeTabId.set(id);
  }

  replaceTabs(tabs: TabItem[]) {
    this.tabs.set(tabs);
  }
}
