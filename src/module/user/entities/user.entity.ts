import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  // 自动创建病自增  这种不需要人为的进行设置，且可以根据唯一标识来实现的自增的效果的key
  // 叫  主键
  // 主  primary
  // 建  key
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 24, unique: true })
  @ApiProperty({ description: '用户名' })
  username: string;

  @Column()
  @ApiProperty({ description: '密码' })
  password: string;
}
