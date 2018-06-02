import Route from '@ember/routing/route';
// Use Module From Ember Global
export default Ember.Route.extend({
  model() {
    return fetch('https://randomuser.me/api?results=10')
      .then(r => r.json());
  }
})
