import { Controller, Post, Body } from '@nestjs/common';
import { ExpoNotificationService } from './notification.service';

@Controller('notifications')
export class ExpoNotificationController {
    private pushTokens: string[] = [];
  constructor(private readonly expoNotificationService: ExpoNotificationService) {}

  @Post('send')
  async sendNotification(@Body() body: { expoPushToken: string; title: string; message: string }) {
    return this.expoNotificationService.sendPushNotification(body.expoPushToken, body.title, body.message);
  }

  @Post('save-token')
  savePushToken(@Body() body: { expoPushToken: string }) {
    
    const { expoPushToken } = body;
    console.log(expoPushToken);
    
    if (!expoPushToken.startsWith('ExponentPushToken')) {
      return { success: false, message: 'Invalid Expo push token' };
    }
    this.pushTokens.push(expoPushToken);  
    return { success: true, message: 'Token saved successfully' };
  }
}
