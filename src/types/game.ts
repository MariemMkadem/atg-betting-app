import { Track } from "./product";

export interface Driver {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Horse {
  id: number;
  name: string;
}

export interface Start {
  id: number;
  number: number;
  horse: Horse;
  driver: Driver;
}

export interface Race {
  id: number;
  number: number;
  name: string;
  startTime: string;
  starts: Start[];
  track: Track;
}

export interface Game {
  id: number;
  type: string;
  races: Race[];
}
