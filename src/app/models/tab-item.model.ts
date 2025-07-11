import { Type } from '@angular/core';

export interface TabItem {
  id: string;
  title: string;
  component: Type<any>;
  state?: any;
}
