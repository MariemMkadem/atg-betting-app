export interface Trainer {
  firstName: string;
  lastName: string;
}

export interface Horse {
  startNumber: number;
  trainer: Trainer;
  father: string;
}
