import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import * as tokens from 'nexus-design-system';
import * as esm from 'nexus-ui-components';
const require=createRequire(import.meta.url);
const cjs=require('nexus-ui-components');

for(const [name,library] of [['ESM',esm],['CommonJS',cjs]]) {
 test(name+' consumer renders with the real pinned design-system tokens',()=>{
  const html=renderToStaticMarkup(React.createElement(library.Button,{variant:'primary'},'Synthetic action'));
  assert.match(html,/<button/);assert.match(html,/Synthetic action/);
  assert.ok(tokens.buttons.primary.split(/\s+/).filter(Boolean).every(token=>html.includes(token)));
 });
 test(name+' consumer renders product content through the packaged entry',()=>{
  const html=renderToStaticMarkup(React.createElement(library.ProductCard,{title:'Synthetic product',price:12.5}));
  assert.match(html,/Synthetic product/);assert.match(html,/12\.50/);
 });
}
