import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { Module } from '@nestjs/common';

@Module(
    imports: [TypeOrmModule.forFeature([Payment])],
    controllers: [PaymentController],
    providers: [PaymentService],
)

export class PaymentModule {}