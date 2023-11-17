import {Component, inject, Input, ViewChild} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ContextService} from "../services/context.service";
import {StyleManagerService} from "../services/style-manager.service";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule,
		AsyncPipe,
		NgIf,
		MatFormFieldModule,
		MatSelectModule,
		RouterLink,
		RouterLinkActive,
		MatTooltipModule
	]
})
export class NavComponent {
	menuItems: any = [
		{
			'name': 'Home',
			'url': '/',
			'icon': 'home'
		},
		{
			'name': 'First Component',
			'url': '/first-component',
			'icon': 'dashboard'
		},
		{
			'name': 'Second Component',
			'url': '/second-component',
			'icon': 'bolt'
		}
	]

	@ViewChild(MatSidenav)
	sidenav!: MatSidenav;
	isMobile= true;
	isCollapsed = true;
	selected: string = this.contextService.context;
	isDarkTheme: boolean = this.styleManager.isDark;

	constructor(private observer: BreakpointObserver, private contextService: ContextService, private styleManager: StyleManagerService) {}

	ngOnInit() {
		this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
			this.isMobile = screenSize.matches;
		});
	}

	toggleMenu() {
		if(this.isMobile){
			this.sidenav.toggle();
			this.isCollapsed = false; // On mobile, the menu can never be collapsed
		} else {
			this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
			this.isCollapsed = !this.isCollapsed;
		}
	}

	test(): void {
		this.contextService.majContext(this.selected);
	}

	get themeIcon(): string {
		return this.isDarkTheme ? 'light_mode' : 'dark_mode';

	}

	toggleDarkTheme() {
		this.isDarkTheme = !this.isDarkTheme;
		this.styleManager.toggleDarkTheme();
	}
}
