import { Injectable } from '@nestjs/common';
import { Counter, register } from 'prom-client';

@Injectable()
export class PrometheusService {
  private requestCounter: Counter<string>;

  constructor() {
    this.requestCounter = new Counter({
      name: 'http_requests_total',
      help: 'Total HTTP requests',
    });

    register.registerMetric(this.requestCounter);
  }

  incrementRequestCounter(): void {
    this.requestCounter.inc();
  }
}
