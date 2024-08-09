import { Component, Input } from '@angular/core';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import IWeatherData from 'src/app/models/interfaces/IWeatherData';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() weatherData!: IWeatherData;

  minTemperatureIcon: IconDefinition = faTemperatureLow;
  maxTemperatureIcon: IconDefinition = faTemperatureHigh;
  humidityIcon: IconDefinition = faDroplet;
  windIcon: IconDefinition = faWind;
}
