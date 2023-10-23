import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { CrawlDto } from './dtos';
import * as fs from 'fs';

type Answer = {
  content: string;
  isCorrect: boolean;
};

type Question = {
  image: string;
  audio: string;
  text: string;
  explain: string;
  transcript: string;
  answers: Answer[];
  questions: Question[];
};

@Injectable()
export class CrawlService {
  async crawlToiecTest(fields: CrawlDto) {
    const { headers, url, name } = fields;
    const res = await axios.get(url, {
      headers,
    });
    const result: Record<string, any> = {};

    const $ = cheerio.load(res.data);

    $('.tab-pane').each((index, tab) => {
      if (index === 0 || index === 1 || index === 4) {
        const questions = this.crawlToiecPart125(tab);

        result[`part${index + 1}`] = questions;
      }

      if (index === 2 || index === 3 || index === 5 || index === 6) {
        const questions = this.crawlToiecPart3456(tab);

        result[`part${index + 1}`] = questions;
      }
    });

    for (const [key, value] of Object.entries(result)) {
      if (!fs.existsSync(`./crawl/${name}`)) {
        fs.mkdirSync(`./crawl/${name}`);
      }

      fs.writeFileSync(`./crawl/${name}/${key}.json`, JSON.stringify(value));
    }

    return result;
  }

  crawlToiecPart125(el: cheerio.Element): Question[] {
    const questions: Question[] = [];

    const $ = cheerio.load(el);

    $('.test-questions-wrapper .context-wrapper').each((index, ctx) => {
      const question = this.getCommonQuestion($, ctx);

      questions.push(question);
    });

    return questions;
  }

  getCommonQuestion($: cheerio.CheerioAPI, ctx: cheerio.Element) {
    const answers: Answer[] = [];
    const imagePath = $(ctx)
      .find('.context-content.context-image img')
      .attr('data-src');
    const image = imagePath ? `https://study4.com${imagePath}` : '';
    const audioPath = $(ctx).find('.post-audio-item source').attr('src');
    const audio = audioPath ? `https://study4.com${audioPath}` : '';
    const transcript =
      $(ctx).find('.context-content.context-transcript div').html() || '';
    const answersEl = $(ctx).next('.question-wrapper').first();
    const text =
      $(ctx)
        .next('.question-wrapper')
        .first()
        .find('.question-text')
        .text()
        .replace(/\n/g, '')
        .trim() ||
      $(ctx)
        .find('.question-twocols .context-content.text-highlightable')
        .first()
        .html()
        ?.replace(/\n/g, '')
        ?.trim()
        .replace(/src="([^"]*)"/g, `src="https://study4.com$1"`) ||
      '';
    const correctAnswer = answersEl
      .find('.mt-2.text-success')
      .text()
      .replace(/\n/g, '')
      .trim();
    answersEl.find('.question-answers .form-check').each((i, _el) => {
      const label = $(_el)
        .find('label')
        .text()
        .replace(/\n/g, '')
        .trim()
        .replace('.', '');
      answers.push({
        content: label,
        isCorrect: correctAnswer.includes(label[0]),
      });
    });
    const explain =
      answersEl
        .next('.question-explanation-wrapper')
        .first()
        .find('.collapse')
        .html() || '';
    const question: Question = {
      image,
      audio,
      text,
      explain,
      transcript,
      answers,
      questions: [],
    };

    return question;
  }

  getChilrenQuestion($: cheerio.CheerioAPI, ctx: cheerio.Element): Question {
    const answers: Answer[] = [];

    const text =
      $(ctx).find('.question-text').text().replace(/\n/g, '').trim() || '';

    const questionAnswers = $(ctx).find('.question-answers');

    const correctAnswer = questionAnswers
      .next('.mt-2.text-success')
      .text()
      .replace(/\n/g, '')
      .trim();

    questionAnswers.find('.form-check').each((i, a) => {
      const label = $(a)
        .find('label')
        .text()
        .replace(/\n/g, '')
        .trim()
        .replace('.', '');

      answers.push({
        content: label,
        isCorrect: correctAnswer.includes(label[0]),
      });
    });

    const explain =
      $(ctx).next('.question-explanation-wrapper').find('.collapse').html() ||
      '';

    return {
      answers,
      audio: '',
      image: '',
      explain,
      text,
      transcript: '',
      questions: [],
    };
  }

  crawlToiecPart3456(el: cheerio.Element): Question[] {
    const questions: Question[] = [];

    const $ = cheerio.load(el);

    $('.test-questions-wrapper .question-group-wrapper').each((index, ctx) => {
      const question = this.getCommonQuestion($, ctx);

      const _children: Question[] = [];

      $(ctx)
        .find('.questions-wrapper .question-wrapper')
        .each((i, q) => {
          const question = this.getChilrenQuestion($, q);

          _children.push(question);
        });

      question.questions = _children;

      questions.push(question);
    });

    return questions;
  }

  async crawlVocabularies(fields: CrawlDto) {
    const { headers, url, name, maxPage = 1 } = fields;
    const result = [];

    for (let index = 1; index <= maxPage; index++) {
      const res = await axios.get(url, {
        headers,
        params: {
          page: index,
        },
      });

      const $ = cheerio.load(res.data);

      $('.termlist-item').each((i, el) => {
        const h3 = $(el).find('.h3');
        const imageSrc = $(el)
          .find('.termlist-item-images img')
          .attr('data-src');

        const image = imageSrc ? `https://study4.com${imageSrc}` : undefined;
        const wordText = $(h3)
          .clone()
          .children()
          .remove()
          .end()
          .text()
          .trim()
          .replace(/\n/g, '');
        const patchOfSpeech = $(el)
          .find('.jq-audio-player')
          .first()
          .prev()
          .prev()
          .text();

        const pro = $(el).find('.jq-audio-player').first().prev().text();
        const audios = [];

        const audio_players = $(el).find('.jq-audio-player audio');
        audio_players.each((i, el) => {
          const source = $(el).find('source');

          audios.push({
            region: i === 0 ? 'UK' : 'US',
            src: source.attr('src'),
          });
        });

        const def = $(el).find('.prewrap.mb-2').text();

        const note = $(el)
          .find('.mb-2 .prewrap')
          .text()
          .trim()
          .replace(/\n/g, '');

        const examples = [];

        $(el)
          .find('.termlist-item-examples li')
          .each((i, el) => {
            examples.push($(el).text());
          });

        const word = {
          name: wordText,
          patchOfSpeech,
          pronunciation: pro,
          audios,
          definition: def,
          note,
          meaning: '',
          image,
          examples,
        };

        result.push(word);
      });
    }

    if (!fs.existsSync(`./crawl/vocabularies`)) {
      fs.mkdirSync(`./crawl/vocabularies`);
    }

    fs.writeFileSync(
      `./crawl/vocabularies/${name}.json`,
      JSON.stringify(result),
    );

    return result;
  }
}
