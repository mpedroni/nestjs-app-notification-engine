import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('notification-email')
  async sendEmail(@Payload() data: any): Promise<void> {
    const { id, email, name } = data.value;
    await this.appService.sendEmail(Number(id), email, name);
  }

  @MessagePattern('notification-sms')
  async sendSMS(@Payload() data: any): Promise<void> {
    const { id, phone, name } = data.value;

    await this.appService.sendSMS(Number(id), phone, name);
  }
}
