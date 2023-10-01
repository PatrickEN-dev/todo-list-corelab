export class Card {
  readonly id: number;
  title: string;
  note: string;
  isFavorite: Boolean;
  color: string;

  readonly createdAt: Date;

  constructor() {
    this.createdAt = new Date();
  }
}
