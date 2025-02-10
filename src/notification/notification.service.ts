import { Injectable } from '@nestjs/common';


@Injectable()
export class ExpoNotificationService {
  private readonly expoPushApiUrl = 'https://exp.host/--/api/v2/push/send';

  async sendPushNotification(expoPushToken: string, title: string, body: string) {
    if (!expoPushToken.startsWith('ExponentPushToken')) {
      console.error('Invalid Expo push token');
      return;
    }

    const message = {
      to: expoPushToken,
      sound: 'default',
      title,
      body,
    };

    try {
      const response = await fetch(this.expoPushApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      const data = await response.json();
      console.log('Expo Push Notification Response:', data);
      return data;
    } catch (error) {
      console.error('Error sending Expo push notification:', error);
    }
  }
}
