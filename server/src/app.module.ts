import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/music-platform'), TrackModule],
})
export class AppModule {}
