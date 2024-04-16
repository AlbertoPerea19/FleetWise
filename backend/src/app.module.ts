import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { In } from 'typeorm';
import { InvitationCode } from './invitation-code/entities/invitation-code.entity';
import { InvitationCodeModule } from './invitation-code/invitation-code.module';
import { DriversModule } from './drivers/drivers.module';
import { Driver } from './drivers/entities/driver.entity';
import { VehiclesModule } from './vehicles/vehicles.module';
import { Vehicle } from './vehicles/entities/vehicle.entity';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, InvitationCode, Driver, Vehicle],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    InvitationCodeModule,
    DriversModule,
    VehiclesModule,
    RoutesModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
