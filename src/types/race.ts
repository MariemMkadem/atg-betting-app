import { Horse } from "./horse";

export interface Race {
  raceNumber: number;
  raceName: string;
  startTime: string;
  horses: Horse[];
}
