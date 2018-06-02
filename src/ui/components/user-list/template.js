// Use Runtime Template compiling instead of precompile... THIS IS BAAAAAADDDDDDD!!!!
import HTMLBarsCompiler from 'ember-source/dist/ember-template-compiler';

const template = `
<ul>
  {{#each users as |user|}}
    <li>{{user.name.last}}, {{user.name.first}}</li>
  {{/each}}
</ul>
`;

export default HTMLBarsCompiler.compile(template);
