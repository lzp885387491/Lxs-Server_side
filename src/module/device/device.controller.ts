import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import e from 'express';
import { ResponseResult } from 'src/utils/ResponseResult';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';

@ApiTags('设备信息')
// @ApiBearerAuth() // 是否上锁
@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post('create')
  @ApiOperation({ summary: '添加一个设备' })
  async create(@Body() createDeviceDto: CreateDeviceDto) {
    const { deviceName } = createDeviceDto;
    if (!deviceName || deviceName == '') {
      throw new BadRequestException('设备名称不能为空！');
    } else {
      const data = this.deviceService.create(createDeviceDto);
      return ResponseResult.success(data);
    }
  }

  @Get('list')
  @ApiOperation({ summary: '获取设备列表' })
  @ApiResponse({ status: 200, description: '成功', type: [Device] })
  async findAll() {
    const data = await this.deviceService.findAll();
    return ResponseResult.success(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.deviceService.update(+id, updateDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviceService.remove(+id);
  }
}
