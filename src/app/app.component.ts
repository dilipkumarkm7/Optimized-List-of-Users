import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';

interface user{
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CdkVirtualScrollViewport, ScrollingModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  users: user[] = [];
  totalNumbers: number = 10000;
  constructor(private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    this.users = Array.from({length: this.totalNumbers}, (_, index) => ({
      id: index + 1,
      name: `User ${index + 1}`,
      email: `user${index + 1}@example.com`,
      role: index % 5 === 0 ? 'Admin' : 'User'
    }));
  }
  loadUsers(){
    this.cdr.markForCheck();
  }
}
