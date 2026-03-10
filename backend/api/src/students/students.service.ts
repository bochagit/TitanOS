import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  findAll(){
    return this.prisma.student.findMany()
  }

  create(data: any){
    return this.prisma.student.create({ data })
  }
}
