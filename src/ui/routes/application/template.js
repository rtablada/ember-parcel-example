// Use Runtime Template compiling instead of precompile... THIS IS BAAAAAADDDDDDD!!!!
import HTMLBarsCompiler from 'ember-source/dist/ember-template-compiler';

const template = `
<h2 class="my-thing">Hello World</h2>

{{user-list users=this.model.results}}
`;

// Route templates have to be registered on `Ember.TEMPLATES` for global resolver
Ember.TEMPLATES['application'] = HTMLBarsCompiler.compile(template);
