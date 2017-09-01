import {Component} from '@angular/core';

const todos = [
'Learn Javascript',
'Learn Angular 2',
'Create app'
];


@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html' ,
	styleUrls: ['app.component.css']
})

export class AppComponent{
	title = "Angular 2Do"
	todos = todos;
}