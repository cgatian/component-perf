import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wow',
  template: `
  NICE
    `,
  styles: [``]
})
export class AnotherComponent implements OnInit {
  constructor() { }

  ngOnInit() { console.log('init') }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destory');
  }
}
