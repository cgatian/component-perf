import {
  Component, Injector, NgModuleFactory,
  ComponentFactoryResolver, ViewContainerRef,
  Input,
  ComponentFactory,
  ComponentRef
} from '@angular/core';


declare const System: any;

const lifecycleHooks = [
  'ngOnInit',
  'ngOnDestroy',
  'ngDoCheck',
  'ngOnChanges',
  'ngAfterContentInit',
  'ngAfterContentChecked',
  'ngAfterViewInit',
  'ngAfterViewChecked'
];

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-loader',
  template: ``
})
// tslint:disable-next-line:component-class-suffix
export class DynamicComponentLoader {

  @Input() componentName: string;
  @Input() moduleName: string;
  @Input() moduleFactoryPath: string;

  dynamicComponent: ComponentRef<any>;

  constructor(
    private injector: Injector,
    private viewRef: ViewContainerRef,
  ) {
    System.import('../../out/src/app/lazy-module/lazy.module.ngfactory.js').then((moduleFactories: any) => {
     // const compType = moduleFactories['HelloWorldComponentNgFactory'].componentType;
      const moduleFactory: NgModuleFactory<any> = moduleFactories['LazyModuleNgFactory'];
      const moduleRef = moduleFactory.create(injector);
      // tslint:disable-next-line:max-line-length
      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory((moduleRef.componentFactoryResolver as any)._factories.keys().next().value);
      this.performanceBootstrapComponent(compFactory);
      console.log('create component');
      this.dynamicComponent = viewRef.createComponent(compFactory);
    });
  }

  performanceBootstrapComponent(comp: ComponentFactory<any>) {
    const componentProto = comp.componentType.prototype as any;
    const originalngOnInit = componentProto.ngOnInit;

    lifecycleHooks.forEach(lifecycle => {

      const originalLifecycleHook = componentProto[lifecycle];
      componentProto[lifecycle] = function (...args) {
        console.log(`${lifecycle} called`);
        if (originalLifecycleHook) {
          originalLifecycleHook.call(this, ...args);
        }
      };
    });
  }
}

