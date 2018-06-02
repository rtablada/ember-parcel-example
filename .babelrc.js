const HTMLBarsCompiler = require('ember-source/dist/ember-template-compiler');

module.exports = {
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 Chrome versions"]
      },
      "useBuiltIns": "true"
    }]
  ],
  "plugins": [
    ["ember-modules-api-polyfill"],
    ["htmlbars-inline-precompile", {
      precompile: HTMLBarsCompiler.precompile
    }]
  ]
}
