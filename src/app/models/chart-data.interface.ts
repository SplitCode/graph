export interface ChartData {
  title: string;
  data: ChartPoint[];
  presets: unknown;
}

export interface ChartPoint {
  [key: string]: number;
}
