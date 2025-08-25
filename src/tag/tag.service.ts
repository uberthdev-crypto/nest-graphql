import { TagEntity } from '@/src/tag/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
    constructor( 
        @InjectRepository(TagEntity) 
        private readonly tagRepository: Repository<TagEntity> ){}

    async getAll(){
        const tags = (await this.tagRepository.find()).map( tag => tag.name);
        return { tags };
    }
}
