import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';

@Injectable()
export class GymsService {
  constructor(private prisma: PrismaService) {}

  findAll(){
    return this.prisma.gym.findMany({
      include: {
        students: true
      }
    });
  }

  async findOne(id: string) {
    const gym = await this.prisma.gym.findUnique({
      where: { id },
      include: {
        students: true
      }
    })

    if (!gym) throw new NotFoundException(`Gym with ID ${id} not found`)
    
    return gym
  }

  create(data: CreateGymDto) {
    return this.prisma.gym.create({ data })
  }

  async update(id: string, data: UpdateGymDto) {
    await this.findOne(id)

    return this.prisma.gym.update({
      where: { id },
      data,
      include: {
        students: true
      }
    })
  }

  async remove(id: string){
    await this.findOne(id)

    return this.prisma.gym.delete({
      where: { id }
    })
  }
}
