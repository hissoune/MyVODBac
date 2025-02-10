import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpoNotificationModule } from './notification/notification.module';

@Module({
  imports: [
    ExpoNotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
