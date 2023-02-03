import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() toggleButton = true;
  @Output() toggleButtonClicked = new EventEmitter();

  public sideBar(): void {
    this.toggleButtonClicked.emit(this.toggleButton);
  }

}
