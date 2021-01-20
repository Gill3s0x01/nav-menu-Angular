import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavRoutingModule {}
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// const routes: Routes = [
//   {
//     path: '',
//     component: NavComponent,
//     data: {
//       breadcrumbs: 'Início',
//     },
//     children: [
//       {
//         path: 'dashboard',
//         loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule),
//         data: {
//           breadcrumbs: 'Dashboard',
//         },
//       },
//       {
//         path: 'financial',
//         loadChildren: () => import('../../pages/financial/financial.module').then(m => m.FinancialModule),
//         data: {
//           breadcrumbs: 'Financeiro',
//         },
//       },
//       {
//         path: 'analytics',
//         loadChildren: () => import('../../pages/analytics/analytics.module').then(m => m.AnalyticsPageModule),
//         data: {
//           breadcrumbs: 'Análises',
//         },
//       },
//       {
//         path: 'measurements',
//         loadChildren: () => import('../../pages/measurements/measurements.module').then(m => m.MeasuringPointsPageModule),
//         data: {
//           breadcrumbs: 'Supervisão',
//         },
//       },
//       {
//         path: 'notifications-history',
//         // tslint:disable-next-line: max-line-length
//         loadChildren: () =>
//           import('../../pages/notifications-history/notifications-history.module').then(m => m.NotificationsHistoryPageModule),
//       },
//       {
//         path: 'settings',
//         loadChildren: () => import('../../pages/settings/settings.module').then(m => m.SettingsPageModule),
//         data: {
//           breadcrumbs: 'Configurações',
//         },
//       },
//       {
//         path: 'setup',
//         loadChildren: () => import('../../pages/setup/setup.module').then(m => m.SetupModule),
//         data: {
//           breadcrumbs: 'Instalação',
//         },
//       },
//       {
//         path: '**',
//         redirectTo: '/nav/dashboard',
//         pathMatch: 'full',
//       },
//     ],
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule, CommonModule],
  exports: [RouterModule],
  declarations: [],
  entryComponents: [],
})
export class NavComponentRoutingModule {}
