import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContextService} from "../../services/context.service";

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
	constructor(private contextService: ContextService) {
	}
	get context(): string {
		return this.contextService.context
	}
}
