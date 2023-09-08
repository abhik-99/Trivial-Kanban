import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class CardInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const user = ctx.user;
    const req = ctx.req;
    console.log('User', user);
    console.log('Request', req);

    return next.handle();
  }
}
