import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidebarExpanded = true;
  sideBarVisibility = true;
  public mobileView = false;
  
  sideBarShow(event: boolean) {
    this.sideBarVisibility = event;
  }

  ngOnInit(): void { 
    window.addEventListener("resize", (event) => {
      if (document.body.clientWidth >= 990) {
        this.sidebarExpanded = true;
        this.sideBarVisibility = true;
        this.mobileView = false;
      } else {
        this.sidebarExpanded = true;
        this.sideBarVisibility = false;
        this.mobileView = true;
      }
    });
  }

}
