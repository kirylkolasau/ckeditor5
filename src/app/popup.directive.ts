
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
	selector: '[popup]'
})
export class PopupDirective {

	constructor(private element: ElementRef) { }

	@HostListener("click", ["$event"])
	public click(event) {
		alert("test");
	}
}
