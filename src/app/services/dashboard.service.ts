import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getChallenges() {
    return this.http.get(`${this.apiUrl}/challenges`);
  }
  getBenefits() {
    return this.http.get(`${this.apiUrl}/benefits`);
  }
  getFaqs() {
    return this.http.get(`${this.apiUrl}/faqs`);
  }
}
