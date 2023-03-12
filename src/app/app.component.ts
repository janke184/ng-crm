import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
	mobileQuery: MediaQueryList;
  	fillerNav = Array.from({length: 6}, (_, i) => `Nav Item ${i + 1}`);
	private _mobileQueryListener: () => void;

	title = 'ng-crm';

	newVersion: boolean | undefined;
	hiddenToolbar = true;
	uploading = false;
	selectedLanguage = 'en';

	constructor(
		private router: Router,
		public dialog: MatDialog,
		changeDetectorRef: ChangeDetectorRef, 
		media: MediaMatcher,
		private translate: TranslateService) 
	{
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);	
	}

	ngOnInit() 
	{
		const browserLang = navigator.language;

    console.log('browserLang', browserLang)
    
    // if browserLang start with es or en, then use it, otherwise use 'en'
    if (browserLang.startsWith('es')) {
      this.selectedLanguage = 'es';
    } else if (browserLang.startsWith('en')) {
      this.selectedLanguage = 'en';
    } else {
      this.selectedLanguage = 'en';
    }
    this.selectedLanguage = 'en';

		this.translate.setDefaultLang(this.selectedLanguage);
		this.translate.use(this.selectedLanguage);
    

		this.router.events.subscribe( (val) => 
		{
			if(val instanceof NavigationEnd)
			{
				// console.log('URL', val.url);
				this.hiddenToolbar =  (val.url=='/login' || val.url=='/') ? true : false ;
			}
		});

		
	}

	

}

