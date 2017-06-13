import { HelloWorldPerfPage } from './app.po';
import { Runner, RegressionSlopeValidator, SeleniumWebDriverAdapter, Options, Validator } from '@angular/benchpress';
import { browser, element, by, $ } from 'protractor';
import { PerfPage } from './perf-page';

describe('component-perf App', () => {
  const page = new PerfPage({
    componentName: 'HelloWorldComponent',
    url: '/#/hello-world.perf/HelloWorldPerfModule/HelloWorldComponent'
  });

  it('should display message saying app works', (done) => {
    page.startSample(done);
  }, 120000);
});
