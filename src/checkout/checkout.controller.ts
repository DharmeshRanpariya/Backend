import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { CheckoutService } from './checkout.service';

@Controller('checkout')
export class CheckoutController {
    constructor(
        private readonly checkutServices: CheckoutService
    ){}

    @Post()
    async checkout(@Body() body: any, @Res() res: Response) {
      const order = await this.checkutServices.createOrder(body.totalAmount);
      return res.status(200).json({
        success: true,
        order,
      });
    }
}
