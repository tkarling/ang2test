import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, Router, routerInjectables} from 'angular2/router';

@Component({selector:"todo-list"})
@View({
    templateUrl:"templates/todo-list.html"
    //directives: [NgFor]
})
class TodoListComponent {
    constructor(){} // public cartService:CartService
}

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
    selector: 'my-friends',
    appInjector: [FriendsService]
})
@View({
    templateUrl:"templates/friends-list.html",
    directives: [NgFor, NgIf]
})

class MyFriendsComponent {
    name:string;
    names:Array<string>;

    constructor(friendsService: FriendsService) {
        this.name = 'Alice';
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

@RouteConfig([
    {path:"/", as:"home", component:MyFriendsComponent},
    {path:"/todo", as:"todo", component:TodoListComponent},
])
@Component({
    appInjector:[routerInjectables],
    selector:"my-app"
})
@View({
    directives: [RouterOutlet, RouterLink],
    templateUrl:`templates/my-app.html`,
    styleUrls: ['styles.css']
})
class MyAppComponent{}


bootstrap(MyAppComponent, [FriendsService]).then(
        success => console.log("success: ", success),
        error => console.log("error: ", error)
);