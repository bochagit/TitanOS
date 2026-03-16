import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { UserRole } from 'generated/prisma/enums';

type AuthUser = {
  userId: string
  gymId: string
  role: UserRole
} 

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

  async remove(id: string, user: AuthUser){
    await this.findOne(id)

    const isAdmin = user.role === UserRole.ADMIN
    const isOwnerOfGym = user.role === UserRole.OWNER && user.gymId === id

    if (!isAdmin && !isOwnerOfGym){
      throw new ForbiddenException('You can only delete your own gym')
    }

    await this.prisma.$transaction(async (tx) => {
      const students = await tx.student.findMany({
        where: { gymId: id },
        select: { id: true }
      })

      const studentIds = students.map((s) => s.id)

      if(studentIds.length > 0){
        await tx.payment.deleteMany({
          where: { studentId: { in: studentIds } }
        })
      }

      await tx.student.deleteMany({ where: { gymId: id } })
      await tx.user.deleteMany({ where: { gymId: id } })
      await tx.gym.delete({ where: { id } })
    })

    return { ok: true, message: 'Gym eliminado con sus datos relacionados' }
  }
}
