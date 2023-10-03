import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { CardRepository } from './repositories/card.repository';

@Injectable()
export class CardsService {
  constructor(private cardRepository: CardRepository) {}

  async create(createCardDto: CreateCardDto) {
    const existingCard = await this.cardRepository.findByTitle(
      createCardDto.title,
    );

    // veruificar se o ip que ta no banco é igual ao da pessoa fazendo a req

    if (existingCard !== null) {
      throw new ConflictException('Card with this title already exists');
    }

    const card = await this.cardRepository.create(createCardDto);
    return card;
  }

  async findAll() {
    return await this.cardRepository.findAll();
  }

  async findOne(id: string) {
    const card = await this.cardRepository.findOne(id);
    if (!card) {
      throw new NotFoundException(`Card with ID ${id} not found`);
    }
    return card;
  }

  async update(id: string, updateCardDto: UpdateCardDto) {
    const existingCard = await this.cardRepository.findOne(id);
    if (!existingCard) {
      throw new NotFoundException(`Card with ID ${id} not found`);
    }

    if (updateCardDto.title) {
      const existingTitle = await this.cardRepository.findByTitle(
        updateCardDto.title,
      );
      if (existingTitle && existingCard.id !== id) {
        throw new ConflictException('Card with this title already exists');
      }
    }

    existingCard.title = updateCardDto.title || existingCard.title;
    existingCard.note = updateCardDto.note || existingCard.note;
    existingCard.color = updateCardDto.color || existingCard.color;

    await this.cardRepository.update(id, existingCard);
    return existingCard;
  }

  async remove(id: string) {
    const existingCard = await this.cardRepository.findOne(id);
    if (!existingCard) {
      throw new NotFoundException(`Card with ID ${id} not found`);
    }

    await this.cardRepository.delete(id);
  }
  async searchCards(query: string) {
    const results = await this.cardRepository.searchCards(query);
    if (!results || results.length === 0) {
      throw new NotFoundException(`No cards matching query '${query}' found.`);
    }
    return results;
  }

  async findByFavorite(isFavorite: boolean) {
    return await this.cardRepository.findByFavorite(isFavorite);
  }
}
