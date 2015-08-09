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
var MyAppComponent = (function () {
    function MyAppComponent(friendsService) {
        this.name = 'Alice';
        //this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
        this.friendsService = friendsService;
        this.names = friendsService.names;
    }
    MyAppComponent.prototype.addFriend = function (friend) {
        this.friendsService.addFriend(friend);
    };
    MyAppComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addFriend($event.target.value);
            $event.target.value = null;
        }
    };
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            appInjector: [FriendsService]
        }),
        angular2_1.View({
            template: "\n      <p>My name: {{ name }}</p>\n      <input #newfriend (keyup)=\"doneTyping($event)\">\n      <button (click)=\"addFriend(newfriend.value); newfriend.value = null\">add friend</button>\n      <p>Friends:</p>\n      <ul>\n         <li *ng-for=\"#name of names\">\n            {{ name }}\n         </li>\n      </ul>\n      <p *ng-if=\"names.length > 3\">You have many friends</p>\n    ",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [FriendsService])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
