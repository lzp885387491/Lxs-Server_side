import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum DeviceStatus {
  Running = 'running',
  Baded = 'baded',
  Stoped = 'stoped',
}

@Entity()
export class Device {
  // 自动创建病自增  这种不需要人为的进行设置，且可以根据唯一标识来实现的自增的效果的key
  // 叫  主键
  // 主  primary
  // 建  key
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '设备ID' })
  id: number;

  @Column({ length: 32, unique: true })
  @ApiProperty({ description: '设备名称' })
  deviceName: string; // 设备名称

  @Column()
  @ApiProperty({ description: '设备类型' })
  deviceType: string; // 设备类型

  @Column()
  @ApiProperty({ description: '设备厂商' })
  deviceManufacturer: string; // 设备厂商

  @Column({ enum: DeviceStatus })
  @ApiProperty({ description: '设备状态', enum: DeviceStatus })
  deviceStatus: string; // 当前的设备状态

  @Column({ nullable: true })
  @ApiProperty({ description: '设备位置' })
  deviceLocation: string; // 设备的位置

  @Column({ default: 'admin' })
  @ApiProperty({ description: '设备管理员' })
  deviceAdministrator: string; // 管理员
}
