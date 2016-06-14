import 'babel-polyfill';
import 'zone.js/dist/zone';

import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app';

bootstrap(AppComponent).catch(err => console.error(err));
