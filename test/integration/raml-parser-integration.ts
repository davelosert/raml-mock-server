import {expect} from 'chai';
import * as ramlParser from 'raml-1-parser';
import path = require('path');


describe('Raml-Parser', () => {
  const examplePath = path.resolve(__dirname, './example.raml');

  it('parses example file with no errors', () => {
   	  let exampleAPI = ramlParser.loadApiSync(examplePath);
   	  expect(exampleAPI).to.exist;
  });
});