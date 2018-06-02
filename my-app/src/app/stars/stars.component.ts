import {Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  roting: number;

  stars: string[] = [];

  @Input()
  readonly: boolean = true;

  @Output()
  rotingChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges');
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      if (this.roting >= i) {
        this.stars.push('fa-star');
      } else if (this.roting < i && (this.roting + 0.5) === i) {
        this.stars.push('fa-star-half-o');
      } else {
        this.stars.push('fa-star-o');
      }
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      // console.log('clickStar: 【this.roting = index;】开始');
      this.roting = index;
      this.rotingChange.emit(this.roting);
    }

  }
}
