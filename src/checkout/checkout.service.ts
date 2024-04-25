import { Injectable } from '@nestjs/common';
const Razorpay = require('razorpay');

@Injectable()
export class CheckoutService {
  private instance: any ;

  constructor() {
    // Initialize Razorpay instance here
    this.instance = new Razorpay({
      key_id: 'YOUR_RAZORPAY_KEY_ID',
      key_secret: 'YOUR_RAZORPAY_KEY_SECRET',
    });
  }

  async createOrder(totalAmount: number) {
    const options = {
      amount: totalAmount * 100, // amount in the smallest currency unit
      currency: 'INR',
    };
    const order = await this.instance.orders.create(options);
    return order;
  }
}
