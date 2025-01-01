import { Routes } from '@angular/router';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { HomeComponent } from './components/home/home.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { RewardsWalletComponent } from './components/rewards-wallet/rewards-wallet.component';
import { FaqsComponent } from './components/faqs/faqs.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'benefits', component: BenefitsComponent },
  {
    path: 'rewards',
    component: RewardsComponent,
  },
  {
    path: 'wallet',
    component: RewardsWalletComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
];
