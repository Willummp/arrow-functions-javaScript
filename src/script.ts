import PromptSync = require('prompt-sync'); // puxando o promptsync pro arquivo
const prompt = PromptSync(); // ligadn o prompt sync

const imc = (peso: number, alt: number) => { return peso / (Math.pow(alt, 2))};
const peso = Number(prompt(`Digite seu peso:  `));
const alt = Number(prompt(`Digite sua altura:   `));

const imcResult = imc(peso, alt);
console.log(`Seu IMC é ${imcResult}`);