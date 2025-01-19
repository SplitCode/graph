export interface ChartData {
  title: string;
  data: ChartPoint[];
  presets: any;
}

export interface ChartPoint {
  [key: string]: number;
}
