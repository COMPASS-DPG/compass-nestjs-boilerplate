
import { Controller, Get } from '@nestjs/common';
import { PrometheusService } from './prometheus.service';

@Controller('prometheus')
export class YourController {
  constructor(private readonly prometheusService: PrometheusService) {}

  @Get()
  async yourEndpoint() {
    // Your code here
    this.prometheusService.incrementRequestCounter();
    return 'Response';
  }
}
