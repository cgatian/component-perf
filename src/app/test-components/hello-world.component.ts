import { NgModule, Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hello-world',
  template: `
      <div>Hello World 2</div>
    `,
  styles: [``]
})
export class HelloWorldComponent implements OnInit, OnDestroy {
  name = 'wenis';
  constructor() { }

  ngOnInit() {
    console.log(`im real! ${this.name}`);
  }

  ngOnDestroy() {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    console.log(`DEAD!`);
  }
}
