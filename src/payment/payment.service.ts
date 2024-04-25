import { Injectable } from '@nestjs/common';
import crypto from 'crypto';
import { Payment } from './entities/payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async verifyPayment(body: any) {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
    const requestBody = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_SECRET_KEY)
      .update(requestBody)
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      const payment = this.paymentRepository.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
      await this.paymentRepository.save(payment);
      return { success: true };
    } else {
      return { success: false };
    }
  }
}
