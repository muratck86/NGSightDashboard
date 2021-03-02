import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { TerrainComponent } from './sections/terrain/terrain.component';
import { ScooterManagementComponent } from './sections/scooter-management/scooter-management.component';
import { DrivesComponent } from './sections/drives/drives.component';
import { CustomersComponent } from './sections/customers/customers.component';
import { GeofenceComponent } from './sections/geofence/geofence.component';
import { CommerceComponent } from './sections/commerce/commerce.component';
import { SupportComponent } from './sections/support/support.component';
import { OrganizationComponent } from './sections/organization/organization.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    TerrainComponent,
    ScooterManagementComponent,
    DrivesComponent,
    CustomersComponent,
    GeofenceComponent,
    CommerceComponent,
    SupportComponent,
    OrganizationComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
