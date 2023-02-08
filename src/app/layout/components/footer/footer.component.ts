import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public mobileView = false;
  constructor() { }
  redirect() {
    window.open('https://www.bacancytechnology.com/', '_blank');
  }
  ngOnInit(): void {
    window.addEventListener("resize", (event) => {
      if (document.body.clientWidth <= 990) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    });
    this.mobileView = document.body.clientWidth <= 990 ? true : false;
  }
}
