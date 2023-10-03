import { Injectable } from '@nestjs/common';

import { CreateCardDto } from '../../dto/create-card.dto';
import { UpdateCardDto } from '../../dto/update-card.dto';
import { CardRepository } from '../card.repository';
import { PrismaService } from 'src/database/prisma.service';
import { Card } from '../../entities/card.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CardPrismaRepository implements CardRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCardDto): Promise<Card> {
    const card = new Card();
    Object.assign(card, { ...data });

    const newCard = await this.prisma.card.create({ data: { ...card } });

    return plainToInstance(Card, newCard);
  }

  async findAll(): Promise<Card[]> {
    const cards = await this.prisma.card.findMany();
    return cards;
  }

  async findOne(id: string): Promise<Card> {
    const card = await this.prisma.card.findUnique({ where: { id } });

    return plainToInstance(Card, card);
  }

  async searchCards(query: string): Promise<Card[]> {
    const cards = await this.prisma.card.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { note: { contains: query } },
          { color: { contains: query } },
        ],
      },
    });

    return cards;
  }

  async findByFavorite(isFavorite: boolean): Promise<Card[]> {
    const cardFavorited = this.prisma.card.findMany({
      where: { isFavorite },
    });
    return cardFavorited;
  }

  async findByColor(color: string): Promise<Card[]> {
    const cardColor = this.prisma.card.findMany({ where: { color } });
    return cardColor;
  }

  async findByTitle(title: string): Promise<Card | null> {
    const card = await this.prisma.card.findFirst({
      where: { title: { contains: title } },
    });

    return card || null;
  }

  async findByDescription(note: string): Promise<Card[]> {
    const cardDescription = this.prisma.card.findMany({
      where: { note },
    });
    return cardDescription;
  }

  async update(id: string, data: UpdateCardDto): Promise<Card> {
    const card = await this.prisma.card.update({
      where: { id },
      data: { ...data },
    });
    return card;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.card.delete({ where: { id } });
  }
}
