import { Module } from '@nestjs/common';
import { ExpoNotificationService } from './notification.service';
import { ExpoNotificationController } from './notification.controller';

@Module({
  providers: [ExpoNotificationService],
  controllers: [ExpoNotificationController],
})
export class ExpoNotificationModule {}
