"use strict";

var _fslightbox = _interopRequireDefault(require("fslightbox"));

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* import { suma, Hello } from "./math";

document.write(`<h1>${suma(1, 2)}</h1>`);
document.write(`<h1>${suma(1, 6)}</h1>`);

cosole.log(`${suma(1,2)}`);
console.log(`${Hello}`); */
_sweetalert.default.fire({
  position: 'center',
  icon: 'success',
  imageUrl: 'https://images.unsplash.com/photo-1619886012699-d3b5ad03c333?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  title: 'Diego Ortega',
  showConfirmButton: false
});
/*
import _ from 'lodash';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());
*/