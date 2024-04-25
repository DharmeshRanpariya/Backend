import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    razorpay_order_id: number;

    @Column()
    razorpay_payment_id: number;

    @Column()
    razorpay_signature: number;

}