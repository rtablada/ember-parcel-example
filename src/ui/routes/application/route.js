export default Ember.Route.extend({
  async model() {
    let response = await fetch('https://randomuser.me/api');
    let json = await response.json();

    return json;
  }
})
