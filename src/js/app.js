import app from '@angular/core';
import {
  Component,
  Input,
  Attribute
} from '@angular/core';

import {
  Routes,
  Route,
  ROUTER_PROVIDERS,
  ROUTER_DIRECTIVES
} from '@angular/router';

@Component({
  selector: 'hello',
  template: '<p>{{ message }}</p>'
})
export class Hello {
  constructor() {
    this.message = 'hello Angular 2';
  }
}

@Component({
  selector: 'hello-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <router-outlet></router-outlet>
  `
})
@Routes([
  new Route({ path: '/', component: Hello }),
])
export class HelloApp {
}
