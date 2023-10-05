import { Module } from '@nestjs/common';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { CardsModule } from './modules/cards/cards.module';

@Module({
  imports: [FavoriteModule, CardsModule],
})
export class AppModule {}
