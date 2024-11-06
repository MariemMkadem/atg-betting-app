import { Track } from "./product";

export interface Trainer {
  id: number;
  firstName: string;
  lastName: string;
}
export interface Driver {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Horse {
  id: number;
  name: string;
  trainer: Trainer;
}

export interface Start {
  id: number;
  number: number;
  horse: Horse;
  driver: Driver;
}

export interface Race {
  id: string;
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
