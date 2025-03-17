import { Routes } from '@angular/router';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';

export const routes: Routes = [
    {
        path: 'portfolio/:username/:templateName',
        component: PortfolioComponent,
        data: { prerender: false }
    },
    {
        path: '**',
        redirectTo: 'portfolio/buddy/first'
    }
];
