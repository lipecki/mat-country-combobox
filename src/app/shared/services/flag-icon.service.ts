import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { countryData } from '../../../assets/countryData.json';

@Injectable({
  providedIn: 'root'
})
export class FlagIconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  public registerIcons(): void {
    const countryCodes = countryData.map(data => data.alpha2Code.toLowerCase());

    this.loadIcons(countryCodes, '../assets/svg-country-flags/svg');
  }

  private loadIcons(iconKeys: string[], iconUrl: string): void {
    iconKeys.forEach(key => {
      this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`));
    });
  }
}
