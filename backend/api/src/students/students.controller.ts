import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { StudentsService } from './students.service'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import { JwtGuard } from 'src/auth/jwt/jwt.guard'

@Controller('students')
@UseGuards(JwtGuard)
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  findAll(){
    return this.studentsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.studentsService.findOne(id)
  }

  @Post()
  create(@Body() body: CreateStudentDto){
    return this.studentsService.create(body)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateStudentDto){
    return this.studentsService.update(id, body)
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return this.studentsService.remove(id)
  }
}
