export interface CardElementModel {
  titel: string;
  header: string;
  billede?: BilledeModel;
  label?: string;
  linkText?: string;
  external?: boolean;
}

export interface BilledeModel {
  url: string;
  label?: string;
}
