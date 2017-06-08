import { ComponentPerfPage } from './app.po';
import { Runner, RegressionSlopeValidator, SeleniumWebDriverAdapter, Options, Validator } from '@angular/benchpress';

import { browser, element, by } from 'protractor';
const runner = new Runner([
  // use protractor as Webdriver client
  SeleniumWebDriverAdapter.PROTRACTOR_PROVIDERS,
  // use RegressionSlopeValidator to validate samples
  { provide: Validator, useExisting: RegressionSlopeValidator },
  // use 10 samples to calculate slope regression
  { provide: RegressionSlopeValidator.SAMPLE_SIZE, useValue: 10 },
  // use the script metric to calculate slope regression
  { provide: RegressionSlopeValidator.METRIC, useValue: 'renderTime' },
  { provide: Options.FORCE_GC, useValue: true },
  { provide: Options.SAMPLE_DESCRIPTION, useValue: {test: 1, desc: 'Wow this is not cool'} },
  { provide: Options.RECEIVED_DATA, useValue: true },
  { provide: Options.REQUEST_COUNT, useValue: true }
]);

describe('component-perf App', () => {
  let page: ComponentPerfPage;

  beforeEach(() => {
    page = new ComponentPerfPage();

  });

  it('should display message saying app works', (done) => {

      // let networkString = "var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}; var network = performance.getEntries() || {}; return network;";
      // browser.driver.executeScript(networkString).then(s => {
      //     console.log(s);
      // });

          // browser.driver.manage().logs().get('performance').then(p => {
          //     console.log(p);
          // });
         // browser.explore();
    browser.waitForAngularEnabled(true);

    runner.sample({
      id: 'wenis',
      prepare: () => {
        browser.get('/');
      },
      execute: () => {
         page.getParagraphText();
      },

    }).then(done, done.fail);

    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
