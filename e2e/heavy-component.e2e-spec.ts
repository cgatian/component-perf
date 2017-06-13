import { PerfPage } from './perf-page';

describe('heavy compute component', () => {
  const page = new PerfPage({
    componentName: 'HeavyComputeComponent',
    url: '#/heavy-compute.perf/HeavyComputeModule/HeavyComputeComponent'
  });

  it('should display message saying app works', (done) => {
    page.startSample(done);
  }, 120000);
});
