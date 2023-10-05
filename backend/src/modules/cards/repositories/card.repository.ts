import { CreateCardDto } from '../dto/create-card.dto';
import { Card } from '../entities/card.entity';
import { UpdateCardDto } from '../dto/update-card.dto';

export abstract class CardRepository {
  abstract create(data: CreateCardDto): Promise<Card> | Card;
  abstract findAll(): Promise<Card[]> | Card[];
  abstract findOne(id: string): Promise<Card | undefined> | Card | undefined;
  abstract update(id: string, data: UpdateCardDto): Promise<Card> | Card;
  abstract delete(id: string): Promise<void> | void;
  abstract searchCards(query: string): Promise<Card[]>;
  abstract findByFavorite(isFavorite: boolean): Promise<Card[]>;
  abstract findByColor(color: string): Promise<Card[]>;
  abstract findByTitle(title: string): Promise<Card | null>;
}
