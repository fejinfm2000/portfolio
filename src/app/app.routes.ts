import { Routes } from '@angular/router';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';

export const routes: Routes = [
    {
        path: 'portfolio/:username',
        component: PortfolioComponent,
        data: { prerender: false }
    },
    {
        path: '**',
        redirectTo: 'portfolio/buddy'
    }
];
