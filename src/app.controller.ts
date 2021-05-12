import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('notification-email')
  async sendEmail(@Payload() data: any): Promise<void> {
    const { email, name } = data.value;
    await this.appService.sendEmail(email, name);
  }

  @MessagePattern('notification-sms')
  async sendSMS(@Payload() data: any): Promise<void> {
    const { phone, name } = data.value;

    await this.appService.sendSMS(phone, name);
  }
}
