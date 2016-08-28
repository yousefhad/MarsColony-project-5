import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ArrivalComponent } from './arrival';
import { EncoutersComponent } from './encouters';
import { ReportComponent } from './report';

const appRoutes: Routes = [

	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'arrival',
		component: ArrivalComponent
	},
	{
		path: 'encouters',
		component: EncoutersComponent
	},
	{
		path: 'report',
		component:  ReportComponent
	},

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
