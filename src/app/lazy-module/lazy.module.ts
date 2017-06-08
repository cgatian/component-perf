import { NgModule, Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from '../test-components/hello-world.component';

@NgModule({
  declarations: [ HelloWorldComponent ],
  imports: [ CommonModule ],
  exports: [ HelloWorldComponent ],
  entryComponents: [ HelloWorldComponent ]
})
export class LazyModule { }
