import {
  Component, Injector, NgModuleFactory,
  ComponentFactoryResolver, ViewContainerRef,
  Input,
  ComponentFactory,
  ComponentRef,
  OnInit,
  Output,
  EventEmitter,
  NgZone
} from '@angular/core';
import { TimingService } from '../services/timing.service';
import { lifecycleHooks } from 'app/lifecycles';


declare const System: any;


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-loader',
  template: ``,
  providers: [
    TimingService
  ]
})
// tslint:disable-next-line:component-class-suffix
export class DynamicComponentLoader implements OnInit {
  @Input() componentName: string;
  @Input() moduleName: string;
  @Input() fileName: string;
  @Output() completed = new EventEmitter<any>();

  dynamicComponent: ComponentRef<any>;

  constructor(
    private injector: Injector,
    private viewRef: ViewContainerRef,
    private timingService: TimingService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    // tslint:disable:no-console
    this.timingService.clearPerformanceTimings();
    this.timingService.bootstrap.start();
    console.time('component:bootstrap');
    System.import(`../../../.tmp/src/app/perf-modules/${this.fileName}.ngfactory.ts`)
      .then((moduleFactories: any) => {
        const moduleFactory: NgModuleFactory<any> = moduleFactories[`${this.moduleName}NgFactory`];
        const moduleRef = moduleFactory.create(this.injector);
        let componentType = null;

        if (this.componentName) {
          componentType = moduleFactories[`${this.componentName}NgFactory`]._componentType;
        }

        const compFactory = moduleRef.componentFactoryResolver
          .resolveComponentFactory(componentType || (moduleRef.componentFactoryResolver as any)._factories.keys().next().value);

        this.performanceBootstrapComponent(compFactory);

        const sub = this.zone.onStable.subscribe((x) => {
          // console.log('wenis');
          this.timingService.componentStable.stop();
          this.timingService.export();
          this.completed.emit();
          sub.unsubscribe();
        });
        this.dynamicComponent = this.viewRef.createComponent(compFactory);
        // (this.dynamicComponent as any)._elDef.flags = 12828672;
        // (this.dynamicComponent as any)._elDef.childFlags = 12828672;
        // (this.dynamicComponent as any)._elDef.directChildFlags = 12828672;

        console.time('component:bootstrap-end');
        this.timingService.bootstrap.stop();
        this.timingService.capturePerformanceTimings();
        this.timingService.ngOnInit.start();
        this.timingService.ngAfterViewInit.start();
        this.timingService.ngAfterContentInit.start();
        this.timingService.componentStable.start();

      });
  }

  performanceBootstrapComponent(comp: ComponentFactory<any>) {
    const componentProto = comp.componentType.prototype as any;
    const componentRef = this;
    lifecycleHooks.forEach(lifecycle => {
      const originalLifecycleHook = componentProto[lifecycle];
      componentProto[lifecycle] = function (...args) {
        if (originalLifecycleHook) {
          originalLifecycleHook.call(this, ...args);
        }
        componentRef.timingService[lifecycle].stop();
      };
    });
  }
}

