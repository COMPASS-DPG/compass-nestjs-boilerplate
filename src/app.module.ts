import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
import { PrometheusModule } from './prometheus/prometheus.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ItemsModule,
    PrometheusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
