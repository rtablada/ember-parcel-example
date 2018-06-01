import 'ember-source/dist/ember.prod';

import ApplicationRoute from './ui/routes/application/route';

let App = Ember.Application.extend({
  modulePrefix: 'my-app',

  LOG_TRANSITIONS: true, // basic logging of successful transitions
  LOG_TRANSITIONS_INTERNAL: true
});


let app = new App();
app.ApplicationRoute = ApplicationRoute;
