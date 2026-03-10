import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  findAll(){
    return this.prisma.student.findMany({
      include: {
        gym: true,
        payments: true
      }
    })
  }

  async findOne(id: string){
    const student = await this.prisma.student.findUnique({
      where: { id },
      include: {
        gym: true,
        payments: true
      }
    })

    if (!student){
      throw new NotFoundException(`Student with ID ${id} not found`)
    }

    return student
  }

  create(data: CreateStudentDto){
    return this.prisma.student.create({
      data,
      include: {
        gym: true
      }
    })
  }

  async update(id: string, data: UpdateStudentDto){
    await this.findOne(id)

    return this.prisma.student.update({
      where: { id },
      data,
      include: {
        gym: true,
        payments: true
      }
    })
  }

  async remove(id: string){
    await this.findOne(id)

    return this.prisma.student.delete({
      where: { id }
    })
  }
}
