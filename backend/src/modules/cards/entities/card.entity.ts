export class Card {
  readonly id: string;
  title: string;
  note: string;
  isFavorite: boolean;
  color: string;

  readonly createdAt: Date;

  constructor() {
    this.createdAt = new Date();
  }
}
