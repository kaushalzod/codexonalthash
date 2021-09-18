import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/internationalization/localization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private localizationService: LocalizationService) { }
  lang: any;
  navOpen: boolean = false;
  ngOnInit(): void {
    this.lang = localStorage.getItem('language') || 'en-US';
  }
  get name(): string {
    return this.localizationService.translate('banner.world');
  }

  toggleMenu() {
    this.navOpen = !this.navOpen;
    console.log(this.navOpen);
  }

  changeLang(lang:any){
    var langcode=lang.target.value;
    if(lang.target.value=='en-EN'){}
    localStorage.setItem('language', langcode);
    this.localizationService.initService();
    console.log(lang)
  }

}
