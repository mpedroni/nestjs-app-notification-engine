import { SendGridService } from '@anchan828/nest-sendgrid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly sendGrid: SendGridService) {}

  async sendEmail(email: string, name: string): Promise<void> {
    await this.sendGrid.send({
      to: email,
      from: process.env.FROM_MAIL,
      subject: 'User Created',
      text: `Hello, ${name}, your user created with sucess`,
      html: `<strong>Hello, ${name}, your user created with sucess</strong>`,
    });
  }
}
