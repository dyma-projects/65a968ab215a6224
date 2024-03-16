import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public result: number = 0;
  @Output() private plus: EventEmitter<Number> = new EventEmitter();
  @Output() private minus: EventEmitter<Number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  public increment() {
    this.plus.emit(this.result);
  }

  public decrement() {
    this.minus.emit(this.result);
  }
}
