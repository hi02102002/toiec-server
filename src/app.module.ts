import configuration from '@/common/config/configuration';
import { MailerModule } from '@nestjs-modules/mailer';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MorganMiddleware } from './common/middlewares/morgan.middleware';
import { DashboardModule } from './dashboard/dashboard.module';
import { DecksModule } from './decks/decks.module';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { GrammarsModule } from './grammars/grammars.module';
import { ReactAdapter } from './mail/adapter';
import { MailModule } from './mail/mail.module';
import { PrismaModule } from './prisma/prisma.module';
import { QuestionsModule } from './questions/questions.module';
import { SettingsModule } from './settings/settings.module';
import { TestsModule } from './tests/tests.module';
import { TopicsModule } from './topics/topics.module';
import { UploadModule } from './upload/upload.module';
import { UsersModule } from './users/users.module';

console.log(process.cwd() + '/templates/');
@Module({
  imports: [
    AuthModule,
    UsersModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TestsModule,
    UploadModule,
    CloudinaryModule,
    QuestionsModule,
    GrammarsModule,
    TopicsModule,
    DecksModule,
    FlashcardsModule,
    SettingsModule,
    DashboardModule,
    MailModule,
    MailerModule.forRoot({
      transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      template: {
        dir: __dirname + '/mail/templates/',
        adapter: new ReactAdapter(),
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}
