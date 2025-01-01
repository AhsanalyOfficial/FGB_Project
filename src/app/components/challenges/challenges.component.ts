import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-challenges',
  imports: [],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.scss',
})
export class ChallengesComponent {
  challenges: any = [];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getChallenges().subscribe(
      (response) => {
        this.challenges = response;
        console.log('Challenges fetched:', this.challenges);
      },
      (error) => {
        console.error('Error fetching challenges:', error);
      }
    );
  }
}
