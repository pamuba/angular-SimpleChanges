import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() myFirstInputParameter: number;

  ngOnChanges() {
    console.log('Inside');
    this.doSomething(this.myFirstInputParameter);
  }

  private doSomething(input: number) {
    console.log(input);
  }

  constructor() {}

  ngOnInit() {}
}
