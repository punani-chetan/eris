import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public mobileView = false;
  @Input() toggleButton = true;
  @Output() toggleButtonClicked = new EventEmitter();

  public sideBar(): void {
    this.toggleButtonClicked.emit(this.toggleButton);
  }

  ngOnInit(): void { 
    window.addEventListener("resize", (event) => {
      if (document.body.clientWidth >= 400) {
        this.mobileView = false;
      } else {
        this.mobileView = true;
      }
    });
  }

}
