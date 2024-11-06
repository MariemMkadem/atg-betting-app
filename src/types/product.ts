export interface Track {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  startTime: string;
  tracks: Track[];
}
