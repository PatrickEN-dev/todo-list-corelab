import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CardRepository } from './repositories/card.repository';
import { CardPrismaRepository } from './repositories/prisma/card.prisma.repository';

@Module({
  controllers: [CardsController],
  providers: [
    CardsService,
    PrismaService,
    {
      provide: CardRepository,
      useClass: CardPrismaRepository,
    },
  ],
  exports: [CardsService],
})
export class CardsModule {}
