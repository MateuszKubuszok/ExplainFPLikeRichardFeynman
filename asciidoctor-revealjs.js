#!/usr/bin/env node
// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('asciidoctor.js')();
require('asciidoctor-reveal.js');

// Convert the document 'presentation.adoc' using the reveal.js converter
var attributes = {
  'revealjsdir': '.',
  'revealjs_history': true,
  'stem': 'latexmath',
  'source-highlighter': 'highlightjs'
};
var options = {safe: 'safe', backend: 'revealjs', attributes: attributes};
asciidoctor.convertFile('index.adoc', options); 
