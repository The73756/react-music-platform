import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateTrackDto } from './dts/create-track.dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreateTrackDto): Promise<Track> {
    return await this.trackModel.create({ ...dto, listens: 0 });
  }

  async getAll(): Promise<Track[]> {
    return this.trackModel.find();
  }

  async getOne() {}

  async delete() {}
}
