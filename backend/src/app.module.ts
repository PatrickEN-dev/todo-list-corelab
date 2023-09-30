import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/task/task.module';
import { FavoriteModule } from './modules/favorite/favorite.module';

@Module({
  imports: [TaskModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
