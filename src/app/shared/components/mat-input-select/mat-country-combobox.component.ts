import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { countryData } from '../../../../assets/countryData.json';
import { CountryData } from '../../models/country-data';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'mat-country-combobox',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  templateUrl: './mat-country-combobox.component.html',
  styleUrl: './mat-country-combobox.component.scss'
})
export class MatCountryComboboxComponent implements OnInit {

  selectedOption: CountryData | undefined;

  options: CountryData[] = countryData;
  filteredOptions: CountryData[] = this.options.slice(0, 15);

  @Input() containerClass = "container-class"

  @Input() displayKeys: Array<keyof CountryData> = ['name'];
  @Input() displayValueSeparator: string = ' - ';

  @Input() selectionKeys!: Array<keyof CountryData>;
  @Input() selectionValueSeparator: string = ' - ';

  @Input() iconKey: keyof CountryData = "alpha2Code";
  @Input() appearance: MatFormFieldAppearance = "fill";

  @Output() countrySelection = new EventEmitter<CountryData>();

  ngOnInit(): void {
    if (!this.selectionKeys) {
      this.selectionKeys = this.displayKeys;
    }
  }

  getDisplayValue(option?: CountryData) {
    let value = "";
    if (option) {
      value = this.displayKeys.map(key => option[key]).join(this.displayValueSeparator);
    }
    return value;
  }

  getSelectionValue(option?: CountryData) {
    let value = "";
    if (option) {
      value = this.selectionKeys.map(key => option[key]).join(this.selectionValueSeparator);
    }
    return value;
  }

  getIconName(option?: CountryData): string {
    let iconName = "";
    if (option) {
      iconName = option[this.iconKey]?.toLowerCase() ?? "";
    }
    return iconName;
  }

  onOptionSelected($event: MatAutocompleteSelectedEvent) {
    this.selectedOption = this.options.find(
      (country) => country.name === $event.option.value
    );
      this.countrySelection.emit(this.selectedOption);
  }

}
