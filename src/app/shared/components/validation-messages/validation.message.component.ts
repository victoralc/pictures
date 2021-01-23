import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-vmessage',
    templateUrl: './validation.message.component.html'
})
export class ValidationMessageComponent{
    @Input() text: string = '';
}