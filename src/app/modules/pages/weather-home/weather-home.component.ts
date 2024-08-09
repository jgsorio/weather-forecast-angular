import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subject, takeUntil } from 'rxjs';
import IWeatherData from '../../../models/interfaces/IWeatherData';
import {
  faMagnifyingGlass,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  initialCity: string = 'Sao Paulo';
  weatherData: IWeatherData = {} as IWeatherData;
  searhIcon: IconDefinition = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.initialCity);
  }

  getWeather(city: string): void {
    this.weatherService
      .getWeather(city)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.weatherData = data;
      });
  }

  onSubmit(): void {
    this.getWeather(this.initialCity);
    this.initialCity = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
