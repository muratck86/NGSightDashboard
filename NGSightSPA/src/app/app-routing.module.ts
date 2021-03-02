import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommerceComponent } from './sections/commerce/commerce.component';
import { CustomersComponent } from './sections/customers/customers.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { DrivesComponent } from './sections/drives/drives.component';
import { GeofenceComponent } from './sections/geofence/geofence.component';
import { OrganizationComponent } from './sections/organization/organization.component';
import { ScooterManagementComponent } from './sections/scooter-management/scooter-management.component';
import { SupportComponent } from './sections/support/support.component';
import { TerrainComponent } from './sections/terrain/terrain.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'drives', component: DrivesComponent },
  { path: 'scooter-management', component: ScooterManagementComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'geofence', component: GeofenceComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'commerce', component: CommerceComponent },
  { path: 'support', component: SupportComponent },
  { path: 'main-map', component: TerrainComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
