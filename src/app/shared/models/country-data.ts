/**
 * Country interface ISO 3166
 */
export interface CountryData {
  name?: string;
  alpha2Code: string;
  alpha3Code?: string;
  numericCode?: string | null;
  callingCode?: string;
}
