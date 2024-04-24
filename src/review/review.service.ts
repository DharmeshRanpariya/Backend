import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { Tour } from 'src/tour/entities/tour.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private repo: Repository<Review>
  ){}
  
  create(createReviewDto: CreateReviewDto) {
    const review = this.repo.create(createReviewDto);
    return this.repo.save(review);
  }

  findAll() {
    return this.repo.find({
      relations: {
        tour: true,
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
