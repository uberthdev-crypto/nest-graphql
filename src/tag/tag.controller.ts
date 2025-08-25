import { Controller, Get } from '@nestjs/common';
import { TagService } from '@/src/tag/tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  getAllTags(){
    return this.tagService.getAll()
  }
}
