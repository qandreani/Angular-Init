import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContextService} from "../../services/context.service";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSliderModule} from "@angular/material/slider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-home',
  standalone: true,
	imports: [CommonModule, MatIconModule, MatPaginatorModule, MatCardModule, MatFormFieldModule, MatRadioModule, MatCheckboxModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatSliderModule, MatTooltipModule, MatSelectModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
	constructor(private contextService: ContextService) {
	}
	get context(): string {
		return this.contextService.context
	}
}
