import { ExceptionFilter, Catch, ArgumentsHost, Logger, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private logger = new Logger('ExceptionFilter');
  private readonly isDebugMode: boolean;
  
  constructor(private configService: ConfigService) {
    this.isDebugMode = this.configService.get<string>('DEBUG_MODE') === 'true';
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception.getStatus();
    const method = request.method;
    const url = request.url;
    const payload = request.body;
    const params = request.params;
    const queryParams = request.query;

    if (status >= 400 && status < 500) {
      if (exception instanceof ValidationError) {
        this.logger.error('Validation error:', exception);
        if (this.isDebugMode) {
          this.logger.debug('Request details:', { method, url, payload, params, queryParams });
        }
        response.status(status).json({
          statusCode: status,
          message: 'Validation failed',
          error: exception.message,
        });
      } else {
        this.logger.error('Client error:', exception.message);
        if (this.isDebugMode) {
          this.logger.debug('Request details:', { method, url, payload, params, queryParams });
        }
        response.status(status).json({
          statusCode: status,
          message: 'Client error',
          error: exception.message,
        });
      }
    } else {
      // Errores del servidor
      this.logger.error('Server error:', exception.message);
      if (this.isDebugMode) {
        this.logger.debug('Request details:', { method, url, payload, params, queryParams });
      }
      response.status(status).json({
        statusCode: status,
        message: 'Internal server error',
        error: exception.message,
      });
    }
  }
}
