import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone:false
})
export class Tab1Page {
  currentLang = 'ar';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('ar');
  
    const browserLang = translate.getBrowserLang() || 'ar'; 
    translate.use(['en', 'ar'].includes(browserLang) ? browserLang : 'ar');
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}