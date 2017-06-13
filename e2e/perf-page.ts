import {
  Runner, RegressionSlopeValidator, SeleniumWebDriverAdapter, Options, Validator, Reporter,
  ConsoleReporter, MultiReporter, JsonFileReporter
} from '@angular/benchpress';
import { browser, element, by, $ } from 'protractor';
import { HTMLReporter, ReportService } from './html-reporter';

export interface PerPageConfig {
  url: string;
  componentName: string;
  description?: string;
}

export class PerfPage {
  static reporter = new ReportService();
  private runner;
  constructor(private config: PerPageConfig) {
    this.runner = new Runner([
      // use protractor as Webdriver client
      SeleniumWebDriverAdapter.PROTRACTOR_PROVIDERS,
      // use RegressionSlopeValidator to validate samples
      { provide: Validator, useExisting: RegressionSlopeValidator },
      // use 10 samples to calculate slope regression
      { provide: RegressionSlopeValidator.SAMPLE_SIZE, useValue: 10 },
      // use the script metric to calculate slope regression
      { provide: RegressionSlopeValidator.METRIC, useValue: 'componentStable' },
      { provide: Options.FORCE_GC, useValue: true },
      { provide: Options.NOW, useValue: () => { return { getTime: () => 'perf' }; } },
      {
        provide: Options.SAMPLE_DESCRIPTION, useValue: {
          componentName: config.componentName,
          description: config.description || ''
        }
      },
      HTMLReporter,
      /*
      JsonFileReporter.PROVIDERS,
      { provide: JsonFileReporter.PATH, useValue: './' },
      */
      MultiReporter.provideWith([ ConsoleReporter, HTMLReporter /*, JsonFileReporter,*/ ]),
    ]);
  }

  startSample(done: DoneFn) {
    browser.get('/');
    this.runner.sample({
      id: this.config.componentName,
      microMetrics: {
        'componentBootstrapTime': 'time to bootstrap component (ms)',
        'componentStable': 'time it takes for Angular to no longer have any tasks',
        'ngOnInitTime': 'time to complete ngOnInit (ms)',
        'ngAfterViewInit': 'time to complete ngAfterViewInit (ms)'
      },
      userMetrics: {
        componentSize: 'component size in bytes'
      },
      prepare: () => {
        // Open page
        browser.ignoreSynchronization = true;
        browser.get(this.config.url);
        // WAIT TO SETTLE
        return new Promise((resolve, reject) => {
          const checkReady = function () {
            browser.findElement(by.id('status')).then(status => {
              status.getText().then((statusText) => {
                if (statusText === 'ready') {
                  resolve();
                } else {
                  setTimeout(checkReady, 100);
                }
              });
            });
          };
          setTimeout(checkReady, 100);
        })
          .then(_ => {
            browser.driver.executeScript(`performance.clearResourceTimings()`);
          });
      },
      execute: () => {
        return $('#start').click().then(() => {
          return new Promise((resolve, reject) => {
            const checkComplete = function () {
              browser.findElement(by.id('status'))
                .then(status => {
                  status.getText()
                    .then(result => {
                      if (result === 'complete') {
                        resolve();
                      } else {
                        setTimeout(checkComplete, 100);
                      }
                    });
                });
            };
            setTimeout(checkComplete, 100);
          });
        });
      }
    }).then(done, done.fail);
  }
}
