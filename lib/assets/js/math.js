"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hello = exports.suma = void 0;

const suma = (a, b) => {
  return a + b;
};

exports.suma = suma;
const Hello = "hello, Diego!";
exports.Hello = Hello;

class miClase {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  muestraX() {
    console.log(this.x);
  }

  sumar() {
    let suma = 0;

    for (var _len = arguments.length, valores = new Array(_len), _key = 0; _key < _len; _key++) {
      valores[_key] = arguments[_key];
    }

    for (let i in valores) {
      suma += valores[i];
    }

    return suma;
  }

}

const miObj = new miClase(2, 5);
miObj.muestraX();
console.log(miObj.sumar(2, 4, 5, 6));