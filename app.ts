import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

class FriendsService {
    names: Array<string>;
    constructor() {
        //this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
        this.names = ["Aarav", "Martín"];
    }
    addFriend(friend: string) {
        this.names.push(friend);
    }
}

@Component({
    selector: 'my-app',
    appInjector: [FriendsService]
})
@View({
    template: `
      <p>My name: {{ name }}</p>
      <input #newfriend (keyup)="doneTyping($event)">
      <button (click)="addFriend(newfriend.value); newfriend.value = null">add friend</button>
      <p>Friends:</p>
      <ul>
         <li *ng-for="#name of names">
            {{ name }}
         </li>
      </ul>
      <p *ng-if="names.length > 3">You have many friends</p>
    `,
    directives: [NgFor, NgIf]
})

class MyAppComponent {
    name:string;
    names:Array<string>;

    constructor(friendsService: FriendsService) {
        this.name = 'Alice';
        //this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
        this.friendsService = friendsService;
        this.names = friendsService.names;
    }

    addFriend(friend) {
        this.friendsService.addFriend(friend);
    }

    doneTyping($event) {
        if($event.which === 13) {
            this.addFriend($event.target.value);
            $event.target.value = null;
        }
    }
}


bootstrap(MyAppComponent);