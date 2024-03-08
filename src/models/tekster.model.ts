export interface TekstData {
  timestamp: number;
  tekster: Tekster;
}

export interface Tekster {
  [key: string]: Tekster | Tekster[] | string | string[];
}
