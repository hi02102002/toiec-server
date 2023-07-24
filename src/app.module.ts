import configuration from '@/common/config/configuration';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MorganMiddleware } from './common/middlewares/morgan.middleware';
import { GrammarsModule } from './grammars/grammars.module';
import { PrismaModule } from './prisma/prisma.module';
import { QuestionsModule } from './questions/questions.module';
import { TestsModule } from './tests/tests.module';
import { UploadModule } from './upload/upload.module';
import { UsersModule } from './users/users.module';
import { TopicsModule } from './topics/topics.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}
