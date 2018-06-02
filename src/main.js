// This is needed to import all of Ember
import 'ember-source/dist/ember.prod';

// Modules need to be imported manually to be set on globals
import ApplicationRoute from './ui/routes/application/route';
import UserListComponent from './ui/components/user-list/component';

// Templates need to be imported to add to bundle
import './ui/routes/application/template';

import Application from '@ember/application';

let App = Application.extend({
  modulePrefix: 'my-app',

  LOG_TRANSITIONS: true, // basic logging of successful transitions
  LOG_TRANSITIONS_INTERNAL: true
});


let app = new App();

// Setup modules for Globabl Resolver
app.ApplicationRoute = ApplicationRoute;
app.UserListComponent = UserListComponent
