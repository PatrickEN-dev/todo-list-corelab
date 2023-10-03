import { randomUUID } from 'node:crypto';

export class Card {
  readonly id: string;
  readonly createdAt: Date;
  title: string;
  note: string;
  isFavorite: boolean | null;
  color: string | null;

  constructor() {
    this.id = randomUUID();
  }
}
