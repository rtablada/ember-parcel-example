import hbs from 'htmlbars-inline-precompile';

const template = hbs`
<ul>
  {{#each users as |user|}}
    <li>{{user.name.last}}, {{user.name.first}}</li>
  {{/each}}
</ul>
`;

export default template;
