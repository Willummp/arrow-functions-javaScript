"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var imc = function (peso, alt) {
    return peso / (Math.pow(alt, 2));
};
var peso = Number(prompt("Digite seu peso:  "));
var alt = Number(prompt("Digite sua altura:   "));
var imcResult = imc(peso, alt);
console.log("Seu IMC \u00E9 ".concat(imcResult));
