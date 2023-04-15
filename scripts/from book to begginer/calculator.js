'use strict';


let eval_result = document.querySelector('.eval_result');
let reset_eval = document.querySelector('.reset_eval');
let divide = document.querySelector('.divide');
let multiply = document.querySelector('.multiply');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let percent = document.querySelector('.percent');
let dot = document.querySelector('.dot');
let del_last_char = document.querySelector('.del_last_char');
let calc_result = document.querySelector('.calc_result');

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');

function click_reset_eval() {eval_result.textContent = '';}
function click_divide() {eval_result.textContent = eval_result.textContent + '/';}
function click_multiply() {eval_result.textContent = eval_result.textContent + '*';}
function click_minus() {eval_result.textContent = eval_result.textContent + '-';}
function click_plus() {eval_result.textContent = eval_result.textContent + '+';}
function click_percent() {eval_result.textContent = eval(eval_result.textContent) / 100;}
function click_dot() {eval_result.textContent = eval_result.textContent + '.';}
function click_del_last_char() {eval_result.textContent = eval_result.textContent.slice(0, -1);}
function click_calc_result() {eval_result.textContent = eval(eval_result.textContent);}

function click_one() {eval_result.textContent = eval_result.textContent + '1';}
function click_two() {eval_result.textContent = eval_result.textContent + '2';}
function click_three() {eval_result.textContent = eval_result.textContent + '3';}
function click_four() {eval_result.textContent = eval_result.textContent + '4';}
function click_five() {eval_result.textContent = eval_result.textContent + '5';}
function click_six() {eval_result.textContent = eval_result.textContent + '6';}
function click_seven() {eval_result.textContent = eval_result.textContent + '7';}
function click_eight() {eval_result.textContent = eval_result.textContent + '8';}
function click_nine() {eval_result.textContent = eval_result.textContent + '9';}
function click_zero() {eval_result.textContent = eval_result.textContent + '0';}