import { Component } from '@angular/core';
import { LocalizationService } from './internationalization/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codexUniversity';

  language: string = 'en-US';
  get name(): string {
    return this.localizationService.translate('banner.world');
  }

  constructor(private localizationService: LocalizationService) {}

  onSelect(lang: string): void {
    localStorage.setItem('language', lang);
    this.localizationService.initService();
    console.log(lang);
  }
}
