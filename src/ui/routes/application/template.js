import hbs from 'htmlbars-inline-precompile';

const template = hbs`
<h2 class="my-thing">Hello World</h2>

{{user-list users=this.model.results}}
`;

Ember.TEMPLATES['application'] = template;
