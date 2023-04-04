import { Dependencies, Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './module/user/entities/user.entity';
import { DeviceModule } from './module/device/device.module';

@Dependencies(DataSource)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bj-cynosdbmysql-grp-790w57fi.sql.tencentcdb.com',
      port: 26451,
      username: 'root',
      password: 'genglei-1',
      database: 'sheep-lzp',
      entities: ['src/module/**/entities/*.entity.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    DeviceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  protected dataSource: any;
  constructor(dataSource) {
    this.dataSource = dataSource;
  }
}
