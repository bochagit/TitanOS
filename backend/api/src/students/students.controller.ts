import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common'
import { StudentsService } from './students.service'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import { JwtGuard } from 'src/auth/jwt/jwt.guard'
import { RolesGuard } from 'src/auth/roles.guard'
import { Roles } from 'src/auth/roles.decorator'
import { UserRole } from 'generated/prisma/enums'

@Controller('students')
@UseGuards(JwtGuard, RolesGuard)
@Roles(UserRole.OWNER, UserRole.ADMIN)
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  findAll(@Req() req: any){
    return this.studentsService.findAll(req.user)
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: any){
    return this.studentsService.findOne(id, req.user)
  }

  @Post()
  create(@Body() body: CreateStudentDto, @Req() req: any){
    return this.studentsService.create(body, req.user)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateStudentDto, @Req() req: any){
    return this.studentsService.update(id, body, req.user)
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: any){
    return this.studentsService.remove(id, req.user)
  }
}
