import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './modules/pages/weather-home/weather-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather-home',
    pathMatch: 'full',
  },
  {
    path: 'weather-home',
    component: WeatherHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
