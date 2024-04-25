import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('verification')
  async paymentVerification(@Body() body: any, @Res() res: Response) {
    const result = await this.paymentService.verifyPayment(body);
    if (result.success) {
      return res.redirect('http://localhost:3000/thank-you');
    } else {
      return res.status(400).json({ success: false });
    }
  }


}
