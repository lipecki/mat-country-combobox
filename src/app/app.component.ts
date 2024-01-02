import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatInputSelectComponent } from './shared/components/mat-input-select/mat-input-select.component';
import { FlagIconService } from './shared/services/flag-icon.service';
import { CountryData } from './shared/models/country-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatInputSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Country Selection';
  countryDisplayKeys: Array<keyof CountryData> = ['name', 'alpha2Code']

  constructor(private flagIconService: FlagIconService) { }

  ngOnInit(): void {
    this.flagIconService.registerIcons();
  }
}
