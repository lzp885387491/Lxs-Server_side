import { ApiProperty } from '@nestjs/swagger';
import { DeviceStatus } from '../entities/device.entity';

export class CreateDeviceDto {
  @ApiProperty({ description: '设备名称' })
  deviceName: string; // 设备名称

  @ApiProperty({ description: '设备类型' })
  deviceType: string; // 设备类型

  @ApiProperty({ description: '设备厂商' })
  deviceManufacturer: string; // 设备厂商

  @ApiProperty({ description: '设备状态', enum: DeviceStatus })
  deviceStatus: string; // 当前的设备状态

  @ApiProperty({ description: '设备位置' })
  deviceLocation: string; // 设备的位置

  @ApiProperty({ description: '设备管理员' })
  deviceAdministrator: string; // 管理员
}
