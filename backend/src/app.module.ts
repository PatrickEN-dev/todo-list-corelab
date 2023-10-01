import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/task/task.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { CardsModule } from './modules/cards/cards.module';

@Module({
  imports: [TaskModule, FavoriteModule, CardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
