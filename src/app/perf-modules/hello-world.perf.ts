import { NgModule, Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  template: `
      <div>Hello World</div>
    `,
  styles: [``]
})
export class HelloWorldComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('😊 Hello World! 😊');
  }
}

// Declare the bare minium required for the component
@NgModule({
  declarations: [ HelloWorldComponent ],
  imports: [ CommonModule ],
  exports: [ HelloWorldComponent ],
  entryComponents: [ HelloWorldComponent ]
})
export class HelloWorldPerfModule { }

