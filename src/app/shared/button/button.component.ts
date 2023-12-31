import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled!: boolean;
  @Input() buttonText!: string;
  @Input() buttonImage!: string;
  @Input() overRideButtonClass!: boolean;
  @Input() customClass!: string;

  @Input() buttonImage2!: string;
  @Output() buttonClick = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  get getCustomClass(): string {
    return this.overRideButtonClass ? this.customClass : '';
  }

  handleClick() {
    this.buttonClick.emit(true);
  }
}
