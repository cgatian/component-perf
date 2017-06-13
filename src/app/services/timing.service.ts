import { Injectable } from '@angular/core';

@Injectable()
export class TimingService {
  public bootstrap = new Timer('componentBootstrapTime');
  public componentStable = new Timer('componentStable');
  public ngOnInit = new Timer('ngOnInitTime');
  public ngAfterViewInit = new Timer('ngAfterViewInit');
  public ngAfterContentInit = new Timer('ngAfterContentInit');

  private componentSize: number;

  public export() {
    const win = (window as any);
    win.bootstrap = this.bootstrap.elapsedTime;
    win.ngOnInit = this.ngOnInit.elapsedTime;
    win.ngAfterViewInit = this.ngAfterViewInit.elapsedTime;
    win.ngAfterContentInit = this.ngAfterContentInit.elapsedTime;
    win.componentSize = this.componentSize;
  }

  public clearPerformanceTimings() {
    performance.clearResourceTimings();
  }

  public capturePerformanceTimings() {
    // Get Performance resources
    const performanceResourceTimings = performance.getEntriesByType('resource') as any[];
    this.componentSize = performanceResourceTimings.reduce((prev, current) => {
      return prev += current.transferSize;
    }, 0);
  }
}

export class Timer {
  private startTime: number;
  private endTime: number;

  public get elapsedTime(): number {
    return this.endTime - this.startTime;
  }

  constructor(private label: string) {
  }

  public start() {
    this.startTime = Date.now();
    // tslint:disable-next-line:no-console
    console.time(this.label);
  }
  public stop() {
    this.endTime = Date.now();
    // tslint:disable-next-line:no-console
    console.timeEnd(this.label);
  }
}
