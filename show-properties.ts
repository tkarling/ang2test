import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'display'
})
@View({
    template:
        '<p>My name: {{myName}} </p>' +
            '<p>Friends:</p>' +
            '<ul>' +
                '<li *ng-for="#name of names"' +
                    '{{ name }}' +
                '</li>' +
            '</ul>',
    directives:[NgFor]
})

class DisplayComponent {
    name: string;
    names:Array<string>;

    constructor() {
        this.name = 'Alice';
        this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }
}