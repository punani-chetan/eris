import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public mobileView = false;
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle() {
    this.toggleSidebar.emit(!this.isExpanded);
    this.isExpanded = !this.isExpanded;
  } 

  ngOnInit(): void { 
    window.addEventListener("resize", (event) => {
      if (document.body.clientWidth >= 990) { 
        this.mobileView = false;
      } else {
         this.mobileView = true;
      }
    });
    this.mobileView = document.body.clientWidth <= 990 ? true : false;
  }
}
