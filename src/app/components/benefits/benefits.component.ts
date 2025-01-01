import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits',
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
  benefits: any;
  constructor(private dashboardService: DashboardService) {}
  ngOnInit() {
    console.log('APIs fetched from dashboard service');
    this.dashboardService.getBenefits().subscribe(
      (response) => {
        this.benefits = response;
        console.log('benefits', this.benefits);
      },
      (error) => {
        console.error('error:', error);
      }
    );
  }
}
