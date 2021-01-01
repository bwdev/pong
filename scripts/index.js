import { Engine } from './engine.js';

console.log('Starting Game');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight

const engine = new Engine(canvas.width, canvas.height, ctx);

engine.init();
// console.log(engine);