import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input() likeCount: number;
  @Input() isSelected: boolean;
  @Output() change = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.isSelected ? this.likeCount++ : this.likeCount--;
    this.change.emit({ newValue: this.isSelected });
  }
}

export interface LikeChangedEventArgs {
  newValue: boolean;
}
