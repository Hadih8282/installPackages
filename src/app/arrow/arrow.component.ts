import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {
  @Input('isArrow')isSelect :boolean = false ;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isSelect = !this.isSelect; 
    // this.change.emit(this.isArrow);
    this.click.emit({newValue:this.isSelect});
  }

}
