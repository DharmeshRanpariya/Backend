import { Injectable } from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tour } from './entities/tour.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TourService {
  constructor(@InjectRepository(Tour) private repo: Repository<Tour>) {}
  create(createTourDto: CreateTourDto) {
    const tour = this.repo.create(createTourDto);
    return this.repo.save(tour);
  }

  findAll(page) {
    const recordsPerPage = 10;
    let skip = 0;
    // const skip = (+page - 1) * recordsPerPage;
    const request = {
      relations: {
        reviews: true,
        booking: true,
      },
    };
    if (page && !isNaN(page) && page > 0) {
      skip = (page - 1) * recordsPerPage;
      request['take'] = recordsPerPage;
      request['skip'] = skip; 
    }
    return this.repo.find(request);
  }

  async getTourCount() {
    return this.repo.count();
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne({
      where: { id },
      relations: {
        reviews: true,
      },
    });
  }

  getFeatured() {
    return this.repo.find({
      where: { featured: true },
      relations: {
        reviews: true,
      },
    });
  }

  async update(id: number, updateTourDto: UpdateTourDto) {
    const tour = await this.repo.update(id, updateTourDto);
    console.log(tour);
    return true;
  }

  async remove(id: number) {
    if (!id) {
      return 'not a tour';
    }
    const tour = await this.repo.findOne({
      where: { id },
    });
    return this.repo.remove(tour);
  }
}
