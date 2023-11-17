import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

	context: string = '';

  constructor() { }

	majContext(context: string): void {
		this.context = context;
		console.log(this.context)
	}
}
