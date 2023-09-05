import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from 'src/decorators';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    const isGoogleLogin = this.reflector.getAllAndOverride<boolean>(
      'google-login',
      [context.getHandler(), context.getClass()],
    );
    if (isPublic || isGoogleLogin) {
      return true;
    }
    return super.canActivate(context);
  }

  // Must override getRequest to handle graphql context type
  getRequest(context: ExecutionContext) {
    switch (context.getType<GqlContextType>()) {
      case 'graphql': {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
      }
      default: {
        // 'http' | 'ws' | 'rpc'
        return context.switchToHttp().getRequest();
      }
    }
  }
}
