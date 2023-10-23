import { Body, Controller, Post, Res } from '@nestjs/common';
import { CrawlService } from './crawl.service';
import { CrawlDto } from './dtos';
import { Response } from 'express';

@Controller('crawl')
export class CrawlController {
  constructor(private readonly crawlService: CrawlService) {}

  @Post('/toiec-test')
  async crawlToiecTest(@Body() body: CrawlDto, @Res() res: Response) {
    const result = await this.crawlService.crawlToiecTest(body);

    return res.json(result);
  }

  @Post('/vocabularies')
  async crawlVocabularies(@Body() body: CrawlDto, @Res() res: Response) {
    const result = await this.crawlService.crawlVocabularies(body);

    return res.json(result);
  }
}
