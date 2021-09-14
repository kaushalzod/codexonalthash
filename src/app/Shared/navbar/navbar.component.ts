import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  navOpen: boolean = false;
  ngOnInit(): void {
  }

  toggleMenu() {
    this.navOpen = !this.navOpen;
    console.log(this.navOpen);
  }

}
