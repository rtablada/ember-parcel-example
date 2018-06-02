import hbs from 'htmlbars-inline-precompile';

const template = hbs`
<h2 class="my-thing">Hello World</h2>

{{user-list users=this.model.results}}
`;

// Route templates have to be registered on `Ember.TEMPLATES` for global resolver
Ember.TEMPLATES['application'] = template;
