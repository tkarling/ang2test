var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var TodoListComponent = (function () {
    function TodoListComponent() {
    } // public cartService:CartService
    TodoListComponent = __decorate([
        angular2_1.Component({ selector: "todo-list" }),
        angular2_1.View({
            templateUrl: "templates/todo-list.html"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListComponent);
    return TodoListComponent;
})();
var FriendsService = (function () {
    function FriendsService() {
        //this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
        this.names = ["Aarav", "Martín"];
    }
    FriendsService.prototype.addFriend = function (friend) {
        this.names.push(friend);
    };
    return FriendsService;
})();
var MyFriendsComponent = (function () {
    function MyFriendsComponent(friendsService) {
        this.name = 'Alice';
        this.friendsService = friendsService;
        this.names = friendsService.names;
    }
    MyFriendsComponent.prototype.addFriend = function (friend) {
        this.friendsService.addFriend(friend);
    };
    MyFriendsComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addFriend($event.target.value);
            $event.target.value = null;
        }
    };
    MyFriendsComponent = __decorate([
        angular2_1.Component({
            selector: 'my-friends',
            appInjector: [FriendsService]
        }),
        angular2_1.View({
            templateUrl: "templates/friends-list.html",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [FriendsService])
    ], MyFriendsComponent);
    return MyFriendsComponent;
})();
var MyAppComponent = (function () {
    function MyAppComponent() {
    }
    MyAppComponent = __decorate([
        router_1.RouteConfig([
            { path: "/", as: "home", component: MyFriendsComponent },
            { path: "/todo", as: "todo", component: TodoListComponent },
        ]),
        angular2_1.Component({
            appInjector: [router_1.routerInjectables],
            selector: "my-app"
        }),
        angular2_1.View({
            directives: [router_1.RouterOutlet, router_1.RouterLink],
            templateUrl: "templates/my-app.html",
            styleUrls: ['styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent, [FriendsService]).then(function (success) { return console.log("success: ", success); }, function (error) { return console.log("error: ", error); });
