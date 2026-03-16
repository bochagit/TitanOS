import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import { UserRole } from 'generated/prisma/enums'

type AuthUser = { userId: string, gymId: string, role: UserRole }

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  findAll(user: AuthUser){
    const where = user.role === UserRole.ADMIN ? {} : { gymId: user.gymId }

    return this.prisma.student.findMany({
      where,
      include: {
        gym: true,
        payments: true
      }
    })
  }

  async findOne(id: string, user: AuthUser){
    const where = user.role === UserRole.ADMIN ? { id } : { id, gymId: user.gymId }

    const student = await this.prisma.student.findFirst({
      where,
      include: {
        gym: true,
        payments: true
      }
    })

    if (!student) throw new NotFoundException(`Student with ID ${id} not found`)
    return student
  }

  create(data: CreateStudentDto, user: AuthUser){
    const payload = user.role === UserRole.ADMIN ? data : { ...data, gymId: user.gymId }

    return this.prisma.student.create({
      data: payload,
      include: {
        gym: true
      }
    })
  }

  async update(id: string, data: UpdateStudentDto, user: AuthUser){
    await this.findOne(id, user)

    return this.prisma.student.update({
      where: { id },
      data,
      include: {
        gym: true,
        payments: true
      }
    })
  }

  async remove(id: string, user: AuthUser){
    await this.findOne(id, user)

    return this.prisma.student.delete({
      where: { id }
    })
  }
}
