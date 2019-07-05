import {JSDOM} from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = new JSDOM('<!doctype html><html><body></body></html>', {
    url: "http://localhost/"
});
const win = doc.window;

global.document = doc.window.document;
global.window = win;

Object.keys(window).forEach(key => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);