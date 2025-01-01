import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faqs',
  imports: [NgbAccordionModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent {
  faqs: any = [];
  faqsList: any;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getFaqs().subscribe(
      (response) => {
        this.faqs = response;
        console.log('faqs:', this.faqs);
      },
      (error) => {
        console.error('Error fetching faqs:', error);
      }
    );
  }
}
