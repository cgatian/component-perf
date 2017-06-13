import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'component-bootstrapper',
  template: `
      <div>
       <div>
          <span class="info-label">File:</span>
          <span>{{fileName}}</span>
        </div>
        <div>
          <span class="info-label">Module:</span>
          <span>{{moduleName}}</span>
        </div>
        <div>
          <span class="info-label">Component:</span>
          <span>{{componentName}}</span>
        </div>
        <div>
          <span class="info-label">Status:</span>
          <span id="status">{{status}}</span>
        </div>
        <button id="start" (click)="onLoadComponent()">Start</button>
      </div>
      <dynamic-loader *ngIf="startLoad"
       [moduleName]="moduleName"
       [fileName]="fileName"
       [componentName]="componentName"
       (completed)="onComplete()">
       </dynamic-loader>
    `,
  styles: [`
    .info-label {
      font-weight:bold;
    }
  `]
})
export class ComponentBootstrapper implements OnInit, OnDestroy {
  componentName: string;
  moduleName: string;
  fileName: string;

  startLoad = false;
  status: string;
  demo = false;

  private routerSubscription: Subscription;
  constructor(private route: ActivatedRoute) {
    this.status = 'init';
  }

  ngOnInit() {
    this.routerSubscription = this.route.params
      .subscribe(params => {
        this.fileName = params['fileName'];
        this.moduleName = params['moduleName'];
        this.componentName = params['componentName'];
      });

    if (this.demo) {
      setTimeout(() => {
        this.status = 'ready';
      }, 2000);
    }
    this.status = 'ready';
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  onComplete() {
    this.status = 'complete';
  }

  onLoadComponent() {
    this.status = 'loading';
    this.startLoad = true;
  }
}
